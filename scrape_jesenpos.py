import json
import time
from playwright.sync_api import sync_playwright

def scrape_images():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("https://www.jesenpos.com/product.html", wait_until="networkidle")
        
        # Scroll bit by bit to lazily load images if needed
        for i in range(10):
            page.evaluate("window.scrollBy(0, 800)")
            time.sleep(0.5)
            
        images = page.evaluate('''() => {
            return Array.from(document.querySelectorAll('img')).map(img => {
                let src = img.src;
                // find the closest parent with text to associate the product name
                let text = img.parentElement ? img.parentElement.innerText.trim() : "";
                if (!text && img.parentElement.parentElement) {
                    text = img.parentElement.parentElement.innerText.trim();
                }
                return {src: src, alt: img.alt, text: text};
            });
        }''')
        
        # also capture background images if any (e.g. for hero)
        bg_elements = page.evaluate('''() => {
            const elements = document.querySelectorAll('*');
            const bgs = [];
            for (let el of elements) {
                const style = window.getComputedStyle(el);
                if (style.backgroundImage !== "none" && style.backgroundImage.includes('url')) {
                    bgs.push(style.backgroundImage);
                }
            }
            return bgs;
        }''')

        result = {
            "images": images,
            "backgrounds": bg_elements
        }
        
        with open("jesenpos_images.json", "w", encoding="utf-8") as f:
            json.dump(result, f, indent=2, ensure_ascii=False)
            
        print(f"Scraped {len(images)} images and {len(bg_elements)} backgrounds")
        browser.close()

if __name__ == "__main__":
    scrape_images()
