@echo off
FOR /F "tokens=5" %%a IN ('netstat -aon ^| find "3000"') DO taskkill /F /PID %%~nxa
