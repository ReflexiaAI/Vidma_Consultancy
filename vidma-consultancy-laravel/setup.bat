@echo off
echo Setting up Vidma Consulting Group Laravel Application...
echo.

echo 1. Installing PHP dependencies...
composer install

echo.
echo 2. Installing Node.js dependencies...
npm install

echo.
echo 3. Creating environment file...
if not exist .env (
    copy .env.example .env
    echo Environment file created. Please update database settings if needed.
)

echo.
echo 4. Generating application key...
php artisan key:generate

echo.
echo 5. Running database migrations...
php artisan migrate

echo.
echo 6. Seeding database with sample data...
php artisan db:seed

echo.
echo 7. Building assets...
npm run build

echo.
echo Setup complete! 
echo.
echo To start the development server, run:
echo php artisan serve
echo.
echo Then visit: http://localhost:8000
echo.
pause
