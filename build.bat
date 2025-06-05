
rm dist -rf
 

set SRC_PATH=C:\workspace\oneorder
set DST_PATH=C:\workspace\order

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


