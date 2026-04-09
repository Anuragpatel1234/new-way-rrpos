import csv
import os
import re
from pathlib import Path
from urllib.parse import urlparse

import requests
from ddgs import DDGS


CLIENTS = [
    "Pavagadh Mahakali Temple Pavagadh Gujarat",
    "Bharuchaji Temple Bhojan Shala Gujarat",
    "7Seas Mall Vadodara",
    "Alpha One Mall Ahmedabad Gujarat",
    "Gokul Dairy Ahmedabad Gujarat",
    "Honour Restaurant Ahmedabad",
    "Ashrfilal Ice Cream Ahmedabad Gujarat",
    "INOX PVR Cinema Vadodara Ahmedabad",
    "Mahalaxmi Swami Narayan Temple Mumbai",
    "Tasty Vadapav Vadodara Ahmedabad",
    "Ambica Fire Works Raipur Darwaja Ahmedabad",
    "Fun World Rajkot Gujarat",
    "BAPS Swaminarayan Sarangpur Gujarat",
    "Tirupati Rushivan Vijapur Ahmedabad",
    "RaRaj Restaurant Law Garden Ahmedabad",
    "Gandhi Vanmali Manek Chowk Ahmedabad",
    "Rakesh Fire Works Savli Vadodara Gujarat",
    "The Lion Water Park Rajkot Gujarat",
    "Bina Ice Cream Chowpati Mumbai",
    "Sundha Mata Ropeway Rajasthan",
    "KD Hospital Nursing College Ahmedabad Gujarat",
    "NAAZ Indian Restaurant Leicester UK",
    "Rainbow Fire Works Vadodara",
    "Reliance Guesthouse Jamnagar Gujarat",
    "Satyanarayan Kathiyawadi Restaurant Vasad Gujarat",
]


def slugify(text: str) -> str:
    text = text.lower().strip()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-") or "logo"


def choose_extension(url: str, content_type: str) -> str:
    path = urlparse(url).path.lower()
    for ext in [".png", ".jpg", ".jpeg", ".webp", ".svg"]:
        if path.endswith(ext):
            return ext
    if "image/png" in content_type:
        return ".png"
    if "image/svg" in content_type:
        return ".svg"
    if "image/webp" in content_type:
        return ".webp"
    return ".jpg"


def try_download_image(image_url: str, output_path_no_ext: Path) -> tuple[bool, str, str]:
    try:
        resp = requests.get(
            image_url,
            timeout=20,
            headers={"User-Agent": "Mozilla/5.0"},
            allow_redirects=True,
        )
        if resp.status_code != 200:
            return False, "", f"http_{resp.status_code}"

        ctype = resp.headers.get("content-type", "").lower()
        if not ctype.startswith("image/"):
            return False, "", "not_image_content"

        ext = choose_extension(image_url, ctype)
        output_file = output_path_no_ext.with_suffix(ext)
        output_file.write_bytes(resp.content)
        return True, str(output_file), "ok"
    except Exception as exc:  # noqa: BLE001
        return False, "", f"error_{type(exc).__name__}"


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    output_dir = root / "public" / "client-logos"
    output_dir.mkdir(parents=True, exist_ok=True)
    report_file = output_dir / "logo_download_report.csv"

    rows: list[dict[str, str]] = []

    with DDGS() as ddgs:
        for idx, client in enumerate(CLIENTS, start=1):
            query = f"{client} official logo"
            base_name = f"{idx:02d}-{slugify(client)}"
            saved_path = ""
            source_url = ""
            status = "not_found"

            try:
                results = list(ddgs.images(query, max_results=12))
            except Exception as exc:  # noqa: BLE001
                rows.append(
                    {
                        "id": str(idx),
                        "client": client,
                        "query": query,
                        "status": f"search_error_{type(exc).__name__}",
                        "source_url": "",
                        "saved_path": "",
                    }
                )
                continue

            for result in results:
                image_url = result.get("image")
                if not image_url:
                    continue
                ok, path, reason = try_download_image(image_url, output_dir / base_name)
                if ok:
                    saved_path = path
                    source_url = image_url
                    status = "downloaded"
                    break
                status = reason

            rows.append(
                {
                    "id": str(idx),
                    "client": client,
                    "query": query,
                    "status": status,
                    "source_url": source_url,
                    "saved_path": saved_path,
                }
            )

    with report_file.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(
            f, fieldnames=["id", "client", "query", "status", "source_url", "saved_path"]
        )
        writer.writeheader()
        writer.writerows(rows)

    downloaded = sum(1 for r in rows if r["status"] == "downloaded")
    print(f"Downloaded {downloaded}/{len(rows)} logo candidates.")
    print(f"Report: {report_file}")


if __name__ == "__main__":
    main()

