rem package, update used git
rem server will auto update.

set "script_dir=%~dp0"
echo %script_dir%

set SRC_PATH=%script_dir%..\orderDemo
set DST_PATH=%script_dir%\dist

cd %SRC_PATH%
xcopy .\server %DST_PATH% /E /Y /I

