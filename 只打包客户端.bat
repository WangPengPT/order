rem package, update used git
rem server will auto update.

set "script_dir=%~dp0"
echo %script_dir%

set SRC_PATH=%script_dir%..\orderDemo
set DST_PATH=%script_dir%\dist

cd %SRC_PATH%

cd ..
cd ordersystemclient
call npm install
call npm run build
xcopy .\dist %DST_PATH%\public /E /Y /I

cd %DST_PATH%
