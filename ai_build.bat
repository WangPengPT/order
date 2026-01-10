@echo off
rmdir /s /q ai/project 2>nul
mkdir ai/project

set "script_dir=%~dp0"
set SRC_PATH=%script_dir%..\orderDemo\langChain_aiAssistant
set DST_PATH=%script_dir%\ai\project

rem 只复制必要的文件和文件夹
xcopy "%SRC_PATH%\src" "%DST_PATH%\src" /E /Y /I
xcopy "%SRC_PATH%\package.json" "%DST_PATH%\" /Y
xcopy "%SRC_PATH%\tsconfig.json" "%DST_PATH%\" /Y

cd /d "%DST_PATH%"
call npm run build