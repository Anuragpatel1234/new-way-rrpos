import json
import time
from playwright.sync_api import sync_playwright

def scrape_missing():
    with open("updated_categories.json", "r", encoding="utf-8") as f:
        categories = json.load(f)
        
    with open("product_details.json", "r", encoding="utf-8") as f:
        details = json.load(f)

    # find items that are empty in details
    missing = []
    for cat in categories:
        for p in cat["products"]:
            n = p["name"]
            if n not in details or not details[n].get("parsed_specs", {}).get("items"):
                if n not in details or not details[n].get("parsed_specs", {}).get("fallback"):
                    missing.append(n)
                    
    print(f"Found {len(missing)} missing items: {missing}")

    if not missing:
        return
        
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        page.route("**/*", lambda route: route.abort() if route.request.resource_type in ["image", "stylesheet", "font", "media"] else route.continue_())
        
        for name in missing:
            url = f"https://www.jesenpos.com/item.html?id={name}"
            print(f"Scraping missing: {name}")
            try:
                page.goto(url, wait_until="networkidle", timeout=15000) # Give it more time to load dynamic data
                time.sleep(1.5)
                
                # Fetch raw text and table structures
                parsed = page.evaluate('''() => {
                    let items = [];
                    // Fallback strategy 2: Try to find actual <table> or <tr> elements
                    document.querySelectorAll('tr').forEach(tr => {
                        if (tr.children.length === 2) {
                            items.push({k: tr.children[0].innerText, v: tr.children[1].innerText});
                        }
                    });
                    
                    // Fallback strategy 3: lists
                    document.querySelectorAll('li').forEach(li => {
                        let text = li.innerText;
                        if(text.includes(':')){
                            let pts = text.split(':');
                            items.push({k: pts[0], v: pts.slice(1).join(':')});
                        }
                    });
                    
                    // Strategy 4: DOM raw text parsing. Look for Vue render output containers.
                    // The site uses {{item.k}} {{item.v}}. Let's look for elements that have a class containing "item" or "row"
                    let allRows = Array.from(document.querySelectorAll('.row, .item, .spec-item, [class*="item"]')).filter(el => el.children.length === 2);
                    allRows.forEach(row => {
                        items.push({k: row.children[0].innerText, v: row.children[1].innerText});
                    });
                    
                    // Filter and clean
                    let clean = [];
                    items.forEach(i => {
                        if(i.k && i.v && i.k.trim().length > 0 && i.k.length < 50 && i.v.trim().length > 0) {
                            clean.push({k: i.k.trim(), v: i.v.trim()});
                        }
                    });
                    
                    // Final brutal fallback: just grab all text and we will split by lines in python
                    let raw = document.body.innerText;
                    return {items: clean, raw: raw};
                }''')
                
                details[name] = {
                    "name": name,
                    "url": url,
                    "parsed_specs": {"items": parsed['items'], "fallback": []},
                    "raw_text": parsed['raw']
                }
                
                # Write back immediately
                with open("product_details.json", "w", encoding="utf-8") as f:
                    json.dump(details, f, indent=2, ensure_ascii=False)
                    
            except Exception as e:
                print(f"Error on {name}: {e}")

        browser.close()

if __name__ == "__main__":
    scrape_missing()
