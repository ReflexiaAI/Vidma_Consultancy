# Vidma Consulting Group - Laravel Application

A professional legal and business consultancy website built with Laravel, featuring a modern design and comprehensive consultation request system.

## Features

- **Professional Homepage** with hero section, services showcase, and contact form
- **Blog System** with category filtering, search, and related posts
- **Consultation Request System** with comprehensive form validation and database storage
- **Real-time Form Validation** with client-side and server-side validation
- **Responsive Design** with Tailwind CSS and custom branding
- **Modern UI Components** with smooth animations and interactions
- **Database Integration** with SQLite for easy setup
- **API Endpoints** for consultation request management
- **Sample Content** with legal industry blog posts

## Prerequisites

Before running this application, make sure you have the following installed:

1. **PHP 8.1 or higher**
   - Download from: https://www.php.net/downloads.php
   - Or install XAMPP: https://www.apachefriends.org/download.html

2. **Composer** (PHP dependency manager)
   - Download from: https://getcomposer.org/download/

3. **Node.js and npm** (for asset compilation)
   - Download from: https://nodejs.org/

## Quick Setup

### Option 1: Automated Setup (Windows)
1. Double-click `setup.bat` to run the automated setup script
2. Follow the prompts
3. Visit `http://localhost:8000` when complete

### Option 2: Manual Setup

1. **Install Dependencies**
   ```bash
   composer install
   npm install
   ```

2. **Environment Configuration**
   ```bash
   copy .env.example .env
   php artisan key:generate
   ```

3. **Database Setup**
   ```bash
   php artisan migrate
   ```

4. **Build Assets**
   ```bash
   npm run build
   ```

5. **Start Development Server**
   ```bash
   php artisan serve
   ```

6. **Visit Application**
   Open your browser and go to: `http://localhost:8000`

## Project Structure

```
vidma-consultancy-laravel/
├── app/
│   ├── Http/Controllers/     # Application controllers
│   └── Models/              # Eloquent models
├── database/
│   ├── migrations/          # Database migrations
│   └── database.sqlite      # SQLite database file
├── resources/
│   ├── views/              # Blade templates
│   ├── css/                # Stylesheets
│   └── js/                 # JavaScript files
├── routes/
│   ├── web.php             # Web routes
│   └── api.php             # API routes
└── public/
    └── images/             # Static assets
```

## Key Components

### Controllers
- `HomeController` - Handles homepage display
- `BlogController` - Manages blog posts and categories
- `ConsultationRequestController` - Manages consultation requests with validation

### Models
- `User` - User authentication model
- `ConsultationRequest` - Consultation request data model
- `BlogPost` - Blog post model with categories and SEO features

### Views
- `layouts/app.blade.php` - Main application layout
- `layouts/header.blade.php` - Navigation header with blog link
- `layouts/footer.blade.php` - Site footer
- `home.blade.php` - Homepage with all sections
- `blog/index.blade.php` - Blog listing with category filtering
- `blog/show.blade.php` - Individual blog post with related articles

### API Endpoints
- `GET /api/consultation-requests` - List all requests
- `POST /api/consultation-requests` - Create new request with validation
- `GET /api/consultation-requests/{id}` - Get specific request

### Blog Routes
- `GET /blog` - Blog index with category filtering
- `GET /blog/{slug}` - Individual blog post

## Customization

### Branding
The application uses custom CSS variables for branding colors:
- Bronze: `#b87333` (primary accent)
- Charcoal: `#2d3748` (dark elements)
- Navy: `#1e3a8a`
- Teal: `#0d9488`

### Services
Edit the services array in `resources/views/home.blade.php` to modify the services section.

### Contact Form
The contact form is located in the home page template and submits to `/api/consultation-requests`.

## Development

### Asset Compilation
```bash
# Development with hot reload
npm run dev

# Production build
npm run build
```

### Database Management
```bash
# Create new migration
php artisan make:migration create_table_name

# Run migrations
php artisan migrate

# Rollback migrations
php artisan migrate:rollback
```

## Deployment

1. **Production Environment**
   - Set `APP_ENV=production` in `.env`
   - Set `APP_DEBUG=false` in `.env`
   - Configure proper database credentials

2. **Asset Compilation**
   ```bash
   npm run build
   ```

3. **Web Server Configuration**
   - Point document root to `public/` directory
   - Configure URL rewriting for Laravel

## Support

For technical support or questions about this application, please contact the development team.

## License

This project is proprietary software developed for Vidma Consulting Group LLP.
