"""One-off: white NWT mark on navy square for favicon / PWA (run from repo root)."""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "NWT_Logo_2.png"
OUT_512 = ROOT / "public" / "icon-512.png"
OUT_32 = ROOT / "public" / "favicon-32.png"
OUT_48 = ROOT / "public" / "favicon-48.png"
OUT_96 = ROOT / "public" / "favicon-96.png"
OUT_ICO = ROOT / "public" / "favicon.ico"


def main() -> None:
    logo = Image.open(SRC).convert("RGBA")
    lw, lh = logo.size
    max_w, max_h = 448, 160
    scale = min(max_w / lw, max_h / lh)
    nw, nh = max(1, int(lw * scale)), max(1, int(lh * scale))
    logo = logo.resize((nw, nh), Image.Resampling.LANCZOS)

    px = logo.load()
    white_logo = Image.new("RGBA", (nw, nh), (0, 0, 0, 0))
    wl = white_logo.load()
    for y in range(nh):
        for x in range(nw):
            r, g, b, a = px[x, y]
            if a:
                wl[x, y] = (255, 255, 255, a)

    bg = Image.new("RGBA", (512, 512), (15, 23, 42, 255))
    x0 = (512 - nw) // 2
    y0 = (512 - nh) // 2
    bg.paste(white_logo, (x0, y0), white_logo)
    bg.save(OUT_512, optimize=True)

    for size, path in (
        (32, OUT_32),
        (48, OUT_48),
        (96, OUT_96),
    ):
        bg.resize((size, size), Image.Resampling.LANCZOS).save(path, optimize=True)

    # Google Search favicon guidance: multiples of 48px; crawlers often request /favicon.ico
    i48 = bg.resize((48, 48), Image.Resampling.LANCZOS)
    i32 = bg.resize((32, 32), Image.Resampling.LANCZOS)
    i16 = bg.resize((16, 16), Image.Resampling.LANCZOS)
    i48.save(OUT_ICO, format="ICO", append_images=[i32, i16])

    print("Wrote", OUT_512, OUT_32, OUT_48, OUT_96, OUT_ICO)


if __name__ == "__main__":
    main()
