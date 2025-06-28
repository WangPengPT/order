@echo off
set "taskName=Printer1"
set "programPath=C:\Workspace\order\download\runWin7.bat"

:: 检查任务是否已存在
schtasks /query /tn "%taskName%" >nul 2>&1
if %errorlevel% equ 0 (
    echo has task.
    goto :eof
)

:: 创建任务（用户登录时触发）
schtasks /create /tn "%taskName%" /tr "%programPath%" /sc onlogon /ru "%username%" /rl highest

if %errorlevel% equ 0 (
    echo ok.
) else (
    echo failed.
)
pause