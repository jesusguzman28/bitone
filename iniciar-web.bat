@echo off
chcp 65001 >nul
title Bitwise - servidor local
cd /d "%~dp0"

echo.
echo   Levantando la web en http://localhost:4321
echo   Deja esta ventana abierta mientras trabajas.
echo   Para apagarla: cierra la ventana o pulsa Ctrl+C.
echo.

start "" http://localhost:4321
call npm run dev

echo.
echo   El servidor se detuvo. Pulsa una tecla para cerrar.
pause >nul
