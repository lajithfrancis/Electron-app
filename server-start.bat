@echo off
netstat -an | find "3000" > nul
if errorlevel 1 (
    echo Port 3000 is not active. Starting server...
    node standalone/server.js
) else (
    echo Port 3000 is already active.
)