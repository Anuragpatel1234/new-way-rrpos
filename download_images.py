import json
import os
import urllib.request

def main():
    with open("jesenpos_images.json", "r", encoding="utf-8") as f:
        data = json.load(f)

    images = data["images"]
    os.makedirs("public/products", exist_ok=True)

    # Dictionary to map category -> list of {name: "...", image: "..."}
    categories = {
        "touch": {"name": "Touch POS", "products": []},
        "handheld": {"name": "Handheld POS", "products": []},
        "channel": {"name": "Channel POS", "products": []},
        "cash": {"name": "Cash Register", "products": []},
        "scanner": {"name": "Barcode Scanner", "products": []},
        "printer": {"name": "Receipt Printer", "products": []},
        "scale": {"name": "Scale", "products": []}
    }

    hero_url = None
    
    for img in images:
        src = img["src"]
        
        if "primary.jpg" in src:
            hero_url = src
            urllib.request.urlretrieve(src, "public/products/hero-banner.jpg")
            continue
            
        if "/product/" not in src:
            continue
            
        parts = src.split("/product/")[1].split("/")
        if len(parts) >= 2:
            cat_key = parts[0]
            prod_name = parts[1]
            
            if cat_key in categories:
                # the product name is the folder name, let's format it
                display_name = prod_name.upper().replace("_", " ")
                display_name = display_name.replace("PLUS", "plus")
                # special cases for exact naming matching the site
                filename = f"{cat_key}_{prod_name}.jpg"
                try:
                    urllib.request.urlretrieve(src, f"public/products/{filename}")
                    print(f"Downloaded {filename}")
                    
                    # only add if not already added (some might have multiple, we just take first)
                    if not any(p["name"] == display_name for p in categories[cat_key]["products"]):
                        categories[cat_key]["products"].append({
                            "name": display_name,
                            "image": f"/products/{filename}"
                        })
                except Exception as e:
                    print(f"Failed to download {src}: {e}")

    # Generate the JS code for PRODUCT_CATEGORIES
    output_categories = list(categories.values())
    
    with open("updated_categories.json", "w", encoding="utf-8") as f:
        json.dump(output_categories, f, indent=2)
        
    print("Done! Categories saved to updated_categories.json")

if __name__ == "__main__":
    main()
