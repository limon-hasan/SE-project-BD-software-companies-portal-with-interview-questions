import requests
from bs4 import BeautifulSoup
import json
import time
from bs4.element import Tag

BASE_URL = "https://tamimehsan.github.io/interview-questions-bangladesh/companies/"
MAIN_URL = BASE_URL + "general"

def get_company_links():
    resp = requests.get(MAIN_URL)
    soup = BeautifulSoup(resp.text, "html.parser")
    links = []
    for a in soup.find_all("a", href=True):
        href = a["href"]
        if href.startswith("/interview-questions-bangladesh/companies/") and "general" not in href:
            company_name = a.text.strip()
            full_url = "https://tamimehsan.github.io" + href
            links.append((company_name, full_url))
    return links

def parse_company_page(url):
    resp = requests.get(url)
    soup = BeautifulSoup(resp.text, "html.parser")
    info = {
        "name": "",
        "founding_year": "",
        "website": "",
        "application_link": "",
        "technologies": [],
        "intro": "",
        "location": ""
    }
    # Get company name
    h1 = soup.find("h1")
    if h1:
        info["name"] = h1.text.strip()
    # Get table info
    table = soup.find("table")
    if isinstance(table, Tag):
        for row in table.find_all("tr"):
            ths = row.find_all("th") if hasattr(row, 'find_all') else []
            tds = row.find_all("td") if hasattr(row, 'find_all') else []
            if len(ths) == 1 and len(tds) == 1:
                key = ths[0].text.strip().lower()
                val = tds[0]
                if "founding" in key:
                    info["founding_year"] = val.text.strip()
                elif "company website" in key:
                    a = val.find("a", href=True) if isinstance(val, Tag) else None
                    if isinstance(a, Tag) and a.has_attr("href"):
                        info["website"] = str(a["href"]).strip()
                    else:
                        info["website"] = val.text.strip()
                elif "career" in key or "apply" in key:
                    a = val.find("a", href=True) if isinstance(val, Tag) else None
                    if isinstance(a, Tag) and a.has_attr("href"):
                        info["application_link"] = str(a["href"]).strip()
                    else:
                        info["application_link"] = val.text.strip()
                elif "technologies" in key:
                    info["technologies"] = [x.strip() for x in val.text.strip().split(",")]
                elif "location" in key:
                    info["location"] = val.text.strip()
    # Get intro/description
    intro = soup.find("h2", string="Introduction")
    if intro:
        intro_p = intro.find_next("p")
        if intro_p:
            info["intro"] = intro_p.text.strip()
    else:
        # Fallback: first paragraph after h1
        if h1:
            p = h1.find_next("p")
            if p:
                info["intro"] = p.text.strip()
    # Fallback for website/career links if not found in table
    if not info["website"]:
        a = soup.find("a", href=True, string=lambda s: isinstance(s, str) and "website" in s.lower())
        if isinstance(a, Tag) and a.has_attr("href"):
            info["website"] = str(a["href"]).strip()
    if not info["application_link"]:
        a = soup.find("a", href=True, string=lambda s: isinstance(s, str) and ("career" in s.lower() or "apply" in s.lower()))
        if isinstance(a, Tag) and a.has_attr("href"):
            info["application_link"] = str(a["href"]).strip()
    return info

def main():
    companies = []
    links = get_company_links()
    print(f"Found {len(links)} companies.")
    for name, url in links:
        print(f"Fetching: {name} ({url})")
        try:
            data = parse_company_page(url)
            if not data["name"]:
                data["name"] = name
            companies.append(data)
        except Exception as e:
            print(f"Error fetching {name}: {e}")
        time.sleep(1)  # Be polite to the server
    with open("companies_fetched.json", "w", encoding="utf-8") as f:
        json.dump(companies, f, ensure_ascii=False, indent=2)
    print("Done! Data saved to companies_fetched.json")

if __name__ == "__main__":
    main()
