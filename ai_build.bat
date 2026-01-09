rem package, update used git
rem server will auto update.

rm ai\dist -rf
 
set "script_dir=%~dp0"
echo %script_dir%

set SRC_PATH=%script_dir%..\orderDemo\langChain_aiAssistant
set DST_PATH=%script_dir%\ai\dist

cd %SRC_PATH%
call npm install
call npm run build
xcopy .\dist %DST_PATH% /E /Y /I


