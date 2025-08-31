import requests
from bs4 import BeautifulSoup
import json
import time
from bs4.element import Tag
import re

BASE_URL = "https://tamimehsan.github.io/interview-questions-bangladesh/companies/general"

PROBLEM_PREFIXES = (
    "given", "you are given", "write", "implement", "design", "build",
    "find", "calculate", "determine", "return", "print", "create",
    "develop", "solve"
)
META_KEYWORDS = (
    "aptitude", "interview", "round", "stage", "process", "ct o", "cto",
    "behaviour", "behavior", "assessment", "final interview", "onsite",
    "selection", "details"
)

def is_problem_statement(text: str) -> bool:
    t = text.strip().lower()
    if not t:
        return False
    if t.endswith("?"):
        return True
    if any(t.startswith(p) for p in PROBLEM_PREFIXES):
        return True
    if any(k in t for k in ("array", "string", "graph", "tree", "linked list", "constraint", "time complexity", "input", "output")):
        return True
    return False

def looks_meta(text: str) -> bool:
    t = text.strip().lower()
    return any(k in t for k in META_KEYWORDS)

def get_company_links():
    resp = requests.get(BASE_URL)
    soup = BeautifulSoup(resp.text, "html.parser")
    company_links = []
    links = soup.find_all("a", href=True)
    for link in links:
        href = link.get("href")
        company_name = link.text.strip()
        if (href and company_name and 
            "/companies/" in href and 
            href != "/companies/general" and
            not company_name.startswith("http") and len(company_name) > 2):
            clean_name = company_name.replace(" new", "").replace(" updated", "").strip()
            company_links.append({"name": clean_name, "url": f"https://tamimehsan.github.io{href}"})
    seen = set(); unique = []
    for c in company_links:
        if c["name"] not in seen:
            seen.add(c["name"]); unique.append(c)
    return unique

def parse_company_content(url, company_name):
    try:
        resp = requests.get(url)
        soup = BeautifulSoup(resp.text, "html.parser")
        problems = []
        meta = []
        headers = soup.find_all(["h1", "h2", "h3", "h4", "h5", "h6"])
        for header in headers:
            text = header.text.strip()
            if text and len(text) > 5 and looks_meta(text):
                meta.append(text)
        for item in soup.find_all(["li"]):
            text = re.sub(r"\s+", " ", item.text.strip())
            if not text:
                continue
            if is_problem_statement(text) and not looks_meta(text):
                problems.append(text)
        for p in soup.find_all("p"):
            text = re.sub(r"\s+", " ", p.text.strip())
            if not text:
                continue
            if is_problem_statement(text) and not looks_meta(text):
                problems.append(text)
            elif looks_meta(text) and len(text) > 25:
                meta.append(text)
        # dedupe
        prob_unique = []
        seenp = set()
        for q in problems:
            if q not in seenp:
                seenp.add(q); prob_unique.append(q)
        meta_unique = []
        seenm = set()
        for m in meta:
            if m not in seenm:
                seenm.add(m); meta_unique.append(m)
        return prob_unique, meta_unique
    except Exception as e:
        print(f"Error parsing {company_name}: {e}")
        return [], []

def main():
    print("Fetching company links...")
    companies = get_company_links()
    print(f"Found {len(companies)} companies")

    all_problems = {}
    all_meta = {}

    for company in companies:
        print(f"Fetching {company['name']}...")
        probs, meta = parse_company_content(company['url'], company['name'])
        if probs:
            all_problems[company['name']] = probs
            print(f"  - problems: {len(probs)}")
        if meta:
            all_meta[company['name']] = meta
            print(f"  - meta: {len(meta)}")
        time.sleep(0.8)

    # Write problems to questions.json
    questions_list = []
    for name, items in all_problems.items():
        for q in items:
            questions_list.append({"company_name": name, "question": q, "type": "problem"})
    with open("frontend/src/data/questions.json", "w", encoding="utf-8") as f:
        json.dump(questions_list, f, indent=2, ensure_ascii=False)
    with open("frontend/public/questions.json", "w", encoding="utf-8") as f:
        json.dump(questions_list, f, indent=2, ensure_ascii=False)

    # Write meta to interview_meta.json (grouped per company)
    with open("frontend/src/data/interview_meta.json", "w", encoding="utf-8") as f:
        json.dump(all_meta, f, indent=2, ensure_ascii=False)
    with open("frontend/public/interview_meta.json", "w", encoding="utf-8") as f:
        json.dump(all_meta, f, indent=2, ensure_ascii=False)

    print("Created questions.json and interview_meta.json for frontend.")

if __name__ == "__main__":
    main() 