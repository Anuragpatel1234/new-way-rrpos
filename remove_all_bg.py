import os
from PIL import Image

def remove_white_bg(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # If pixel is white or very close to white, make it transparent
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")

directory = 'public/products'

for filename in os.listdir(directory):
    if filename.endswith(".jpg"):
        in_path = os.path.join(directory, filename)
        out_path = os.path.join(directory, filename.replace(".jpg", ".png"))
        
        # Skip if already processed
        if not os.path.exists(out_path):
            try:
                remove_white_bg(in_path, out_path)
                print(f"Processed: {out_path}")
            except Exception as e:
                print(f"Failed {in_path}: {e}")
