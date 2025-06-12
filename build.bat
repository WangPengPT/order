rem package, update used git
rem server will auto update.

rm dist -rf
 
set "script_dir=%~dp0"
echo %script_dir%

set SRC_PATH=%script_dir%..\oneorder
set DST_PATH=%script_dir%order

cd %SRC_PATH%
xcopy .\server %DST_PATH%\dist /E /Y /I


cd manager
call npm run build
ren .\dist\spa\index.html manager.html
xcopy .\dist\spa %DST_PATH%\dist\public /E /Y /I


cd ..
cd client
call npm run build
ren .\dist\index.html client.html
xcopy .\dist %DST_PATH%\dist\public /E /Y /I


cd %DST_PATH%


