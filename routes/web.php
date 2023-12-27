<?php

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

Route::get('/categories', [\App\Http\Controllers\CategoryController::class, 'index']);
Route::post('/categories', [\App\Http\Controllers\CategoryController::class, 'store']);
Route::get('/categories/{category}', [\App\Http\Controllers\CategoryController::class, 'show']);
Route::put('/categories/{category}', [\App\Http\Controllers\CategoryController::class, 'update']);
Route::delete('/categories/{category}', [\App\Http\Controllers\CategoryController::class, 'delete']);

Route::get('/sub_categories', [\App\Http\Controllers\SubCategoryController::class, 'index']);
Route::post('/sub_categories', [\App\Http\Controllers\SubCategoryController::class, 'store']);
Route::get('/sub_categories/{sub_category}', [\App\Http\Controllers\SubCategoryController::class, 'show']);
Route::put('/sub_categories/{sub_category}', [\App\Http\Controllers\SubCategoryController::class, 'update']);
Route::delete('/sub_categories/{sub_category}', [\App\Http\Controllers\SubCategoryController::class, 'delete']);
