@echo off
echo Setting up Vidma Consulting Group Laravel Application (Simple Version)...
echo.

echo 1. Installing Node.js dependencies...
npm install

echo.
echo 2. Building assets...
npm run build

echo.
echo Setup complete! 
echo.
echo NOTE: This is a simplified setup. To run the full Laravel application:
echo 1. Install PHP from https://www.php.net/downloads.php
echo 2. Install Composer from https://getcomposer.org/download/
echo 3. Run the full setup.bat script
echo.
echo For now, you can view the static files in the public directory.
echo.
pause

