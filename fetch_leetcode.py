import requests
import os
import json
import re
import time
import sys

SESSION = os.getenv("LEETCODE_SESSION")
USERNAME = os.getenv("LEETCODE_USERNAME")

if not SESSION:
    print("Error: LEETCODE_SESSION environment variable is not set")
    sys.exit(1)

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
        try:
            resp = requests.get(f"{url}?offset={offset}&limit=20", headers=HEADERS, timeout=10)
            resp.raise_for_status()
            data = resp.json()
        except requests.exceptions.RequestException as e:
            print(f"Error fetching submissions: {e}")
            sys.exit(1)
        except json.JSONDecodeError as e:
            print(f"Error parsing response: {e}")
            sys.exit(1)

        if "submissions_dump" not in data:
            print("Error: Unexpected response format. Check your LEETCODE_SESSION cookie.")
            sys.exit(1)

        for s in data["submissions_dump"]:
            if s.get("status_display") == "Accepted":
                submissions.append(s)

        if not data.get("has_next"):
            break

        offset += 20
        time.sleep(0.5)  # for rate limiting

    return submissions

def save_submission(problem_slug, lang, code, submission_id):
    try:
        folder = f"problems/{safe_filename(problem_slug)}"
        os.makedirs(folder, exist_ok=True)

        ext = EXTENSIONS.get(lang, "txt")
        filename = f"{lang}_{submission_id}.{ext}"
        filepath = f"{folder}/{filename}"

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(code)
    except OSError as e:
        print(f"Error saving submission {submission_id}: {e}")
        return False
    return True

def main():
    print("Fetching submissions...")
    subs = get_all_accepted_submissions()

    print(f"Found {len(subs)} accepted submissions")

    saved_count = 0
    for s in subs:
        try:
            slug = s["title_slug"]
            lang = s["lang"]
            code = s["code"]
            submission_id = s["id"]
        except KeyError as e:
            print(f"Warning: Skipping submission with missing field: {e}")
            continue

        if save_submission(slug, lang, code, submission_id):
            saved_count += 1

    print(f"Done syncing! Saved {saved_count}/{len(subs)} submissions")

if __name__ == "__main__":
    main()
