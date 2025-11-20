import requests
import os
import json
import re

SESSION = os.getenv("LEETCODE_SESSION")
USERNAME = os.getenv("LEETCODE_USERNAME")

HEADERS = {
    "Cookie": f"LEETCODE_SESSION={SESSION}",
    "User-Agent": "Mozilla/5.0"
}

EXTENSIONS = {
    "python3": "py",
    "python": "py",
    "cpp": "cpp",
    "java": "java",
    "c": "c",
    "javascript": "js",
    "typescript": "ts",
    "csharp": "cs",
    "go": "go",
    "ruby": "rb",
    "swift": "swift",
    "rust": "rs",
    "kotlin": "kt",
    "php": "php"
}

def safe_filename(name):
    return re.sub(r"[^a-zA-Z0-9_-]", "_", name)

def get_all_accepted_submissions():
    url = "https://leetcode.com/api/submissions/"
    submissions = []
    offset = 0

    while True:
        resp = requests.get(f"{url}?offset={offset}&limit=20", headers=HEADERS)
        data = resp.json()

        for s in data["submissions_dump"]:
            if s["status_display"] == "Accepted":
                submissions.append(s)

        if not data["has_next"]:
            break

        offset += 20

    return submissions

def save_submission(problem_slug, lang, code, submission_id):
    folder = f"problems/{safe_filename(problem_slug)}"
    os.makedirs(folder, exist_ok=True)

    ext = EXTENSIONS.get(lang, "txt")
    filename = f"{lang}_{submission_id}.{ext}"
    filepath = f"{folder}/{filename}"

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(code)

def main():
    print("Fetching submissions...")
    subs = get_all_accepted_submissions()

    print(f"Found {len(subs)} accepted submissions")

    for s in subs:
        slug = s["title_slug"]
        lang = s["lang"]
        code = s["code"]
        submission_id = s["id"]

        save_submission(slug, lang, code, submission_id)

    print("Done syncing!")

if __name__ == "__main__":
    main()
