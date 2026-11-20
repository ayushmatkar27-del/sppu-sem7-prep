@echo off
echo Starting SPPU Sem 7 Prep Portal Auto-Sync Watcher in background...
start "" /b python "d:\College\End sem 2026 nov dec\auto_sync_watcher.py"
echo Watcher started! Any changes made in this folder will automatically deploy to:
echo https://ayushmatkar27-del.github.io/sppu-sem7-prep/
timeout /t 3
exit
