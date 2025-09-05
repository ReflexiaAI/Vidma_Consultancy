<?php

use App\Http\Controllers\ConsultationRequestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Consultation Request API Routes
Route::get('/consultation-requests', [ConsultationRequestController::class, 'index']);
Route::post('/consultation-requests', [ConsultationRequestController::class, 'store']);
Route::get('/consultation-requests/{id}', [ConsultationRequestController::class, 'show']);
