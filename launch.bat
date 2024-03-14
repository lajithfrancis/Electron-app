@echo off
FOR /F "tokens=5" %%a IN ('netstat -aon ^| find "3000"') DO taskkill /F /PID %%~nxa
cd /d "D:\Projects\Electron-app\standalone"
start "" cmd /c "node server.js"
start "" "D:\Projects\Electron-app\output\My Electron App Setup 1.0.0.exe"
pause