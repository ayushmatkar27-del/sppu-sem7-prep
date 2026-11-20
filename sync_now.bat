@echo off
echo ========================================================
echo   SPPU Sem 7 Prep Portal - Instant GitHub Deployment Sync
echo ========================================================
cd /d "d:\College\End sem 2026 nov dec"
echo Staging all modified files...
git add -A
git commit -m "Manual instant sync: %date% %time%"
echo Pushing changes to live GitHub Pages...
git push origin main
echo.
echo ========================================================
echo   Sync Complete! Deployed updates will be live shortly:
echo   https://ayushmatkar27-del.github.io/sppu-sem7-prep/
echo ========================================================
pause
