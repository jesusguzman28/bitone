@echo off
chcp 65001 >nul
title BIT-ONE - servidor de pruebas (4322)
cd /d "%~dp0"

REM Segundo servidor de desarrollo, en el puerto 4322.
REM
REM Existe para poder dejar una ventana abierta todo el dia probando, sin que
REM choque con el servidor del puerto 4321 que usa "npm run verificar" cuando
REM revisa el sitio antes de desplegar. Dos servidores no pueden compartir
REM puerto: el segundo en arrancar muere con "puerto en uso".
REM
REM Diferencia con iniciar-web.bat, aparte del puerto:
REM
REM   1. Arranca con --host, asi que ademas de localhost responde en la IP de
REM      la PC dentro de la red. Sirve para abrir la web desde el celular y
REM      probar el diseño en un telefono de verdad, no en uno simulado.
REM
REM   2. Reinicia siempre, sin tope. iniciar-web.bat se rinde a los 5 intentos
REM      seguidos, que es lo correcto cuando lo usas para revisar antes de
REM      desplegar: cinco caidas seguidas son un error en el codigo y conviene
REM      verlo. Pero esta es la ventana que queda abierta mientras trabajas, y
REM      ahi lo que se necesita es que nunca deje de responder. A partir del
REM      quinto intento seguido espera 15 segundos en vez de 3 y avisa en
REM      pantalla, para no reintentar a ciegas contra codigo roto.
REM
REM Importante: esto es SOLO para trabajar en la PC. La web publicada en
REM bitone.pe no usa esto ni depende de esta ventana: son archivos ya
REM compilados que sirve GitHub Pages. Si apagas la PC, bitone.pe sigue arriba.

set INTENTOS=0
set ESPERA=3

echo.
echo   ====================================================
echo    BIT-ONE - servidor de pruebas
echo   ====================================================
echo.
echo    En esta PC:     http://localhost:4322
echo    Desde el movil: mira la linea "Network" de abajo
echo.
echo    Deja esta ventana abierta mientras trabajas.
echo    Si el servidor se cae, vuelve a arrancar solo.
echo    Para apagarlo del todo: cierra esta ventana.
echo.

start "" http://localhost:4322

:arrancar
call npm run dev -- --port 4322 --host

REM Si npm run dev termina, es que el servidor se detuvo.
set /a INTENTOS+=1
echo.
echo   ----------------------------------------------------
echo    El servidor se detuvo (reinicio numero %INTENTOS%).

if %INTENTOS% GEQ 5 (
  set ESPERA=15
  echo.
  echo    Ya van %INTENTOS% caidas seguidas. Eso no es un tropiezo:
  echo    lo mas probable es que haya un error en el codigo.
  echo    Para ver que pasa, en otra ventana:  npm run verificar
  echo.
  echo    Igual sigue reintentando, ahora cada 15 segundos.
)

echo    Vuelve a arrancar en %ESPERA% segundos...
echo    Si no quieres que reinicie, cierra esta ventana ahora.
echo   ----------------------------------------------------
echo.

timeout /t %ESPERA% /nobreak >nul
goto arrancar
