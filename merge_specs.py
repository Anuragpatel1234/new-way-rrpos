import json
import os

def merge():
    if not os.path.exists("product_details.json"):
        print("product_details.json does not exist yet.")
        return
        
    with open("updated_categories.json", "r", encoding="utf-8") as f:
        categories = json.load(f)

    with open("product_details.json", "r", encoding="utf-8") as f:
        details = json.load(f)

    for category in categories:
        for product in category["products"]:
            name = product["name"]
            
            specs_dict = {}
            if name in details:
                parsed = details[name].get("parsed_specs", {})
                if parsed and isinstance(parsed, dict):
                    if "items" in parsed and parsed["items"]:
                        for item in parsed["items"]:
                            k = item.get("k", "").strip()
                            v = item.get("v", "").strip()
                            if k and v:
                                specs_dict[k] = v
                    elif "fallback" in parsed and parsed["fallback"]:
                        for item in parsed["fallback"]:
                            k = item.get("k", "").strip()
                            v = item.get("v", "").strip()
                            if k and v:
                                specs_dict[k] = v
                                
            product["specs"] = specs_dict

    with open("updated_categories.json", "w", encoding="utf-8") as f:
        json.dump(categories, f, indent=2, ensure_ascii=False)
        
    print("Merged completed. Specs added to updated_categories.json.")

if __name__ == "__main__":
    merge()
