import json

def fill_blanks():
    with open("updated_categories.json", "r", encoding="utf-8") as f:
        categories = json.load(f)

    # Generic spec templates for categories
    templates = {
        "Touch POS": {
            "Product category": "Touch POS",
            "CPU": "Intel Celeron J6412 / Core i3/i5",
            "Memory": "4GB / 8GB DDR4",
            "Storage": "128GB / 256GB SSD",
            "OS Support": "Windows 10/11 IoT / Android",
            "Main Display": "15\" / 15.6\" Capacitive Touch",
            "Resolution": "1920x1080 FHD",
            "Interface": "USB, LAN, COM, Cash Drawer",
            "Material": "Aluminum / Industrial Plastic"
        },
        "Handheld POS": {
            "Product category": "Handheld POS",
            "CPU": "Quad-Core ARM Cortex A53",
            "Memory": "2GB / 4GB RAM",
            "Storage": "16GB / 32GB ROM",
            "OS Support": "Android 11/12/13",
            "Display": "5.5\" / 6.0\" HD IPS Touch Screen",
            "Camera": "5.0M Auto-Focus with LED Flash",
            "Scanner": "Integrated 1D/2D Barcode Scanner",
            "Printer": "Built-in 58mm Thermal Receipt Printer",
            "Battery": "7.4V / 5200mAh Lithium-ion",
            "Connectivity": "4G/3G, WiFi (2.4G/5G), Bluetooth 4.2"
        },
        "Channel POS": {
            "Product category": "Channel POS System",
            "CPU": "Intel Core i5 (8th/11th Gen)",
            "Memory": "8GB DDR4",
            "Storage": "256GB NVMe SSD",
            "Main Display": "15.6\" Main Touch + 11.6\" Customer",
            "OS Support": "Windows 10/11",
            "Material": "Heavy-duty Steel and Aluminum",
            "Features": "Built-in Scale Interface, Dual Screen Support"
        },
        "Cash Register": {
            "Product category": "Electronic Cash Register",
            "Type": "Heavy Duty / Standard Duty",
            "Interface": "RJ11 / RJ12",
            "Voltage": "12V / 24V",
            "Material": "Thick gauge cold rolled steel",
            "Lock": "3-Position Key Lock",
            "Micro Switch": "Included",
            "Lifecycle": "Over 1,000,000 Operations"
        },
        "Barcode Scanner": {
            "Product category": "Barcode Scanner",
            "Decoding Engine": "Advanced 2D CMOS Imager",
            "Resolution": "1280x800 / 640x480",
            "Scan Rate": "Omnidirectional high-speed scanning",
            "Symbologies": "All standard 1D, PDF417, MicroPDF417, Data Matrix, QR Code",
            "Interface": "USB / Bluetooth / Wireless 2.4G",
            "Durability": "IP54, 1.5m drop resistance"
        },
        "Receipt Printer": {
            "Product category": "Thermal Receipt Printer",
            "Print Method": "Direct Thermal",
            "Print Speed": "200mm/s to 300mm/s",
            "Paper Width": "58mm / 80mm",
            "Reliability": "Auto-Cutter: 1.5 million cuts",
            "Interface": "USB + LAN + Serial",
            "OS Compatibility": "Windows, Linux, Android, iOS"
        },
        "Scale": {
            "Product category": "Digital Retail Scale",
            "Capacity": "15kg / 30kg",
            "Accuracy": "2g / 5g",
            "Display": "Dual LCD/LED display (Operator & Customer)",
            "Interface": "RS-232, USB, Cash Drawer",
            "Power": "AC 110-240V / Built-in rechargeable battery"
        }
    }

    updated = 0
    for cat in categories:
        cat_name = cat["name"]
        for prod in cat["products"]:
            # If empty specs dictionary
            if not prod.get("specs") or len(prod["specs"]) == 0:
                generic = templates.get(cat_name, templates["Touch POS"])
                prod["specs"] = generic
                updated += 1
                
    with open("updated_categories.json", "w", encoding="utf-8") as f:
        json.dump(categories, f, indent=2, ensure_ascii=False)
        
    print(f"Filled generic specs for {updated} products.")

if __name__ == "__main__":
    fill_blanks()
