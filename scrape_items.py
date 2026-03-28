import json
import time
import os
from playwright.sync_api import sync_playwright

def scrape_item_details():
    with open("updated_categories.json", "r", encoding="utf-8") as f:
        categories = json.load(f)
    
    product_details = {}
    if os.path.exists("product_details.json"):
        with open("product_details.json", "r", encoding="utf-8") as f:
            product_details = json.load(f)
            
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Block images and css for extreme speed
        context = browser.new_context()
        page = context.new_page()
        page.route("**/*", lambda route: route.abort() if route.request.resource_type in ["image", "stylesheet", "font", "media"] else route.continue_())
        
        for category in categories:
            for product in category["products"]:
                name = product["name"]
                if name in product_details and "parsed_specs" in product_details[name] and "items" in product_details[name]["parsed_specs"] and len(product_details[name]["parsed_specs"]["items"]) > 0:
                    print(f"Skipping {name}, already scraped.")
                    continue
                
                url = f"https://www.jesenpos.com/item.html?id={name}"
                print(f"Scraping {name} from {url}...")
                
                try:
                    # networkidle is slow, domcontentloaded is very fast but requires rendering time
                    page.goto(url, wait_until="domcontentloaded", timeout=10000)
                    time.sleep(1) # wait for Vue to render the JSON response
                    
                    specs_extracted = page.evaluate('''() => {
                        let items = [];
                        let fallback = [];
                        let allNodes = document.querySelectorAll('*');
                        
                        allNodes.forEach(n => {
                           if (n.childNodes.length === 2 && n.children.length === 2) {
                               let k = n.children[0].innerText?.trim();
                               let v = n.children[1].innerText?.trim();
                               if (k && v && k.length < 50 && v.length < 200 && k !== v && !k.includes('\\n')) {
                                   items.push({k, v});
                               }
                           }
                        });
                        
                        let allDivs = Array.from(document.querySelectorAll('div, li'));
                        allDivs.forEach(div => {
                            let span_children = Array.from(div.children);
                            if(span_children.length >= 2){
                                let k = span_children[0].innerText?.trim();
                                let v = span_children[1].innerText?.trim();
                                if(k && v && k.length < 50 && v.length > 0 && !k.includes('\\n')){
                                    fallback.push({k, v});
                                }
                            }
                        });
                        
                        return {items, fallback};
                    }''')
                    
                    product_details[name] = {
                        "name": name,
                        "url": url,
                        "parsed_specs": specs_extracted
                    }
                    print(f" > Found {len(specs_extracted['items'])} items and {len(specs_extracted['fallback'])} fallback.")
                    
                    # Intermittently save
                    with open("product_details.json", "w", encoding="utf-8") as f:
                        json.dump(product_details, f, indent=2, ensure_ascii=False)
                        
                except Exception as e:
                    print(f"Error scraping {name}: {e}")
                    product_details[name] = {"name": name, "error": str(e)}

        browser.close()
        
    print("Scraping complete. Saved to product_details.json")

if __name__ == "__main__":
    scrape_item_details()
