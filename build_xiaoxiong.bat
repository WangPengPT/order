rem package, update used git
rem server will auto update.

rm dist_xiaoxiong -rf
 
set "script_dir=%~dp0"
echo %script_dir%

set SRC_PATH=%script_dir%..\twoorder
set DST_PATH=%script_dir%

cd %SRC_PATH%
xcopy .\server %DST_PATH%\dist_xiaoxiong /E /Y /I


cd manager
call npm run build
ren .\dist_xiaoxiong\spa\index.html manager.html
xcopy .\dist_xiaoxiong\spa %DST_PATH%\dist_xiaoxiong\public /E /Y /I


cd ..
cd client
call npm run build
ren .\dist_xiaoxiong\index.html client.html
xcopy .\dist_xiaoxiong %DST_PATH%\dist_xiaoxiong\public /E /Y /I


cd %DST_PATH%


