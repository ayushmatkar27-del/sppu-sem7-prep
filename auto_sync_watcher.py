import os
import time
import subprocess
import datetime

WATCH_DIR = r"d:\College\End sem 2026 nov dec"
LOG_FILE = os.path.join(WATCH_DIR, "auto_sync.log")
POLL_INTERVAL = 4 # seconds
DEBOUNCE_DELAY = 5 # seconds after last change detected

IGNORE_DIRS = {'.git', '__pycache__', 'node_modules', '.gemini'}
IGNORE_EXTS = {'.tmp', '.crdownload', '.swp', '.bak'}

def log(msg):
    ts = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    formatted = f"[{ts}] {msg}"
    print(formatted, flush=True)
    try:
        with open(LOG_FILE, "a", encoding="utf-8") as f:
            f.write(formatted + "\n")
    except Exception:
        pass

def get_dir_state(base_path):
    state = {}
    for root, dirs, files in os.walk(base_path):
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
        for f in files:
            if any(f.endswith(ext) for ext in IGNORE_EXTS) or f == "auto_sync.log":
                continue
            fp = os.path.join(root, f)
            try:
                state[fp] = os.path.getmtime(fp)
            except OSError:
                pass
    return state

def has_git_changes():
    try:
        res = subprocess.run(["git", "status", "--porcelain"], cwd=WATCH_DIR, capture_output=True, text=True)
        return bool(res.stdout.strip())
    except Exception as e:
        log(f"Error checking git status: {e}")
        return False

def sync_to_github():
    log("Detected changes. Staging files...")
    subprocess.run(["git", "add", "-A"], cwd=WATCH_DIR, capture_output=True)
    
    # Check if there is anything to commit
    diff_res = subprocess.run(["git", "diff", "--cached", "--quiet"], cwd=WATCH_DIR)
    if diff_res.returncode == 0:
        log("No staged differences to commit.")
        return
    
    commit_msg = f"Auto-sync update: {datetime.datetime.now().strftime('%d-%b-%Y %H:%M:%S')}"
    log(f"Committing: {commit_msg}")
    subprocess.run(["git", "commit", "-m", commit_msg], cwd=WATCH_DIR, capture_output=True)
    
    log("Pushing to GitHub main branch...")
    push_res = subprocess.run(["git", "push", "origin", "main"], cwd=WATCH_DIR, capture_output=True, text=True)
    if push_res.returncode == 0:
        log("SUCCESS: Deployed update to GitHub Pages (Live in ~30s)!")
    else:
        log(f"Push warning/error: {push_res.stderr.strip()}")

def main():
    log(f"=== Starting Auto-Sync Watcher for {WATCH_DIR} ===")
    prev_state = get_dir_state(WATCH_DIR)
    last_change_time = None

    while True:
        time.sleep(POLL_INTERVAL)
        current_state = get_dir_state(WATCH_DIR)
        
        # Check if modified or added/deleted
        changed = False
        if len(current_state) != len(prev_state):
            changed = True
        else:
            for fp, mtime in current_state.items():
                if fp not in prev_state or prev_state[fp] != mtime:
                    changed = True
                    break

        if changed:
            last_change_time = time.time()
            prev_state = current_state

        if last_change_time is not None:
            # Wait for debounce period (ensure user finished saving files)
            if time.time() - last_change_time >= DEBOUNCE_DELAY:
                last_change_time = None
                if has_git_changes():
                    sync_to_github()
                prev_state = get_dir_state(WATCH_DIR)

if __name__ == "__main__":
    main()
