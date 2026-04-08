from PIL import Image

def remove_white_bg(input_path, output_path, threshold=240):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # Check if the pixel is white or close to white
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            newData.append((255, 255, 255, 0)) # Transparent
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")

images = [
    ('public/products/channel_1515A.jpg', 'public/products/channel_1515A.png'),
    ('public/products/cash_2307.jpg', 'public/products/cash_2307.png'),
    ('public/products/scanner_790A.jpg', 'public/products/scanner_790A.png'),
    ('public/products/printer_XP-235B.jpg', 'public/products/printer_XP-235B.png'),
    ('public/products/scale_RTC1.jpg', 'public/products/scale_RTC1.png')
]

for in_path, out_path in images:
    try:
        remove_white_bg(in_path, out_path)
        print(f"Processed: {out_path}")
    except Exception as e:
        print(f"Failed {in_path}: {e}")
