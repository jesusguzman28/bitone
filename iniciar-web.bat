@echo off
chcp 65001 >nul
title BIT-ONE - servidor local
cd /d "%~dp0"

REM Lanzador del servidor de desarrollo.
REM
REM Si el servidor se cae, esta ventana lo vuelve a levantar sola en 3
REM segundos. Antes habia que venir a arrancarlo a mano cada vez.
REM
REM Importante: esto es SOLO para trabajar en la PC. La web publicada en
REM bitwise.pe no usa esto ni depende de esta ventana: son archivos ya
REM compilados que sirve Cloudflare. Si apagas la PC, bitwise.pe sigue arriba.

set INTENTOS=0

echo.
echo   ====================================================
echo    BIT-ONE - servidor local
echo   ====================================================
echo.
echo    Direccion:  http://localhost:4321
echo.
echo    Deja esta ventana abierta mientras trabajas.
echo    Si el servidor se cae, vuelve a arrancar solo.
echo    Para apagarlo del todo: cierra esta ventana.
echo.

start "" http://localhost:4321

:arrancar
call npm run dev

REM Si npm run dev termina, es que el servidor se detuvo.
set /a INTENTOS+=1
echo.
echo   ----------------------------------------------------
echo    El servidor se detuvo (reinicio numero %INTENTOS%).
echo    Vuelve a arrancar en 3 segundos...
echo    Si no quieres que reinicie, cierra esta ventana ahora.
echo   ----------------------------------------------------
echo.

REM Cinco reinicios seguidos ya no son un tropiezo, es un error en el codigo:
REM mejor parar y mostrarlo que quedarse reiniciando en bucle para siempre.
if %INTENTOS% GEQ 5 (
  echo    Se detuvo 5 veces seguidas. Hay algo roto en el codigo.
  echo    Ejecuta esto para ver que pasa:  npm run verificar
  echo.
  pause
  exit /b 1
)

timeout /t 3 /nobreak >nul
goto arrancar
