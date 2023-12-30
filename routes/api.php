<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
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

Route::get('/products', [\App\Http\Controllers\ProductController::class, 'index']);
Route::post('/products', [\App\Http\Controllers\ProductController::class, 'store']);
Route::get('/products/{product}', [\App\Http\Controllers\ProductController::class, 'show']);
Route::put('/products/{product}', [\App\Http\Controllers\ProductController::class, 'update']);
Route::delete('/products/{product}', [\App\Http\Controllers\ProductController::class, 'delete']);

Route::get('/videos', [\App\Http\Controllers\VideoController::class, 'index']);
Route::post('/videos', [\App\Http\Controllers\VideoController::class, 'store']);
Route::put('/videos/{video}', [\App\Http\Controllers\VideoController::class, 'update']);
Route::delete('/videos/{video}', [\App\Http\Controllers\VideoController::class, 'delete']);

Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login']);
Route::post('/register', [\App\Http\Controllers\AuthController::class, 'register']);

Route::middleware('auth:api')->group(function() {
    Route::post('/logout', [\App\Http\Controllers\AuthController::class, 'logout']);
    Route::get('/basket', [\App\Http\Controllers\BasketController::class, 'index']);
    Route::post('/basket', [\App\Http\Controllers\BasketController::class, 'store']);
    Route::delete('/basket', [\App\Http\Controllers\BasketController::class, 'delete']);
});

Route::get('/error', function () {
    return response()->json([
        'error' => 'Не авторизован',
    ]);
})->name('error');


//Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//    return $request->user();
//});
