<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ConsultationRequestController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');

// Blog Routes
Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/{slug}', [BlogController::class, 'show'])->name('blog.show');

// API Routes for consultation requests
Route::prefix('api')->group(function () {
    Route::get('/consultation-requests', [ConsultationRequestController::class, 'index']);
    Route::post('/consultation-requests', [ConsultationRequestController::class, 'store']);
    Route::get('/consultation-requests/{id}', [ConsultationRequestController::class, 'show']);
});
