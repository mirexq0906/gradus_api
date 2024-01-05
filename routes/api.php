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
Route::post('/products/{product}', [\App\Http\Controllers\ProductController::class, 'update']);
Route::delete('/products/{product}', [\App\Http\Controllers\ProductController::class, 'delete']);

Route::get('/videos', [\App\Http\Controllers\VideoController::class, 'index']);
Route::post('/videos', [\App\Http\Controllers\VideoController::class, 'store']);
Route::post('/videos/{video}', [\App\Http\Controllers\VideoController::class, 'update']);
Route::delete('/videos/{video}', [\App\Http\Controllers\VideoController::class, 'delete']);

Route::get('/blogs', [\App\Http\Controllers\BlogController::class, 'index']);
Route::get('/blogs/{blog}', [\App\Http\Controllers\BlogController::class, 'show']);
Route::post('/blogs', [\App\Http\Controllers\BlogController::class, 'store']);
Route::put('/blogs/{blog}', [\App\Http\Controllers\BlogController::class, 'update']);
Route::delete('/blogs/{blog}', [\App\Http\Controllers\BlogController::class, 'delete']);

Route::get('/call_clients', [\App\Http\Controllers\CallClientController::class, 'index']);
Route::get('/call_clients/{call_client}', [\App\Http\Controllers\CallClientController::class, 'show']);
Route::post('/call_clients', [\App\Http\Controllers\CallClientController::class, 'store']);
Route::put('/call_clients/{call_client}', [\App\Http\Controllers\CallClientController::class, 'update']);
Route::delete('/call_clients/{call_client}', [\App\Http\Controllers\CallClientController::class, 'delete']);

Route::get('/email_clients', [\App\Http\Controllers\EmailClientController::class, 'index']);
Route::get('/email_clients/{email_client}', [\App\Http\Controllers\EmailClientController::class, 'show']);
Route::post('/email_clients', [\App\Http\Controllers\EmailClientController::class, 'store']);
Route::put('/email_clients/{email_client}', [\App\Http\Controllers\EmailClientController::class, 'update']);
Route::delete('/email_clients/{email_client}', [\App\Http\Controllers\EmailClientController::class, 'delete']);

Route::get('/banners', [\App\Http\Controllers\BannerController::class, 'index']);
Route::get('/banners/{banner}', [\App\Http\Controllers\BannerController::class, 'show']);
Route::post('/banners', [\App\Http\Controllers\BannerController::class, 'store']);
Route::put('/banners/{banner}', [\App\Http\Controllers\BannerController::class, 'update']);
Route::delete('/banners/{banner}', [\App\Http\Controllers\BannerController::class, 'delete']);

Route::get('/week_products', [\App\Http\Controllers\WeekProductController::class, 'index']);
Route::get('/week_products/{week_product}', [\App\Http\Controllers\WeekProductController::class, 'show']);
Route::post('/week_products', [\App\Http\Controllers\WeekProductController::class, 'store']);
Route::delete('/week_products/{week_product}', [\App\Http\Controllers\WeekProductController::class, 'delete']);

Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login']);
Route::post('/register', [\App\Http\Controllers\AuthController::class, 'register']);

Route::middleware('auth:api')->group(function() {
    Route::post('/logout', [\App\Http\Controllers\AuthController::class, 'logout']);
    Route::get('/user', [\App\Http\Controllers\AuthController::class, 'show']);
    Route::put('/user', [\App\Http\Controllers\AuthController::class, 'update']);

    Route::get('/basket', [\App\Http\Controllers\BasketController::class, 'index']);
    Route::post('/basket', [\App\Http\Controllers\BasketController::class, 'store']);
    Route::delete('/basket', [\App\Http\Controllers\BasketController::class, 'delete']);

    Route::get('/favorite', [\App\Http\Controllers\FavoriteController::class, 'index']);
    Route::post('/favorite', [\App\Http\Controllers\FavoriteController::class, 'store']);
    Route::delete('/favorite', [\App\Http\Controllers\FavoriteController::class, 'delete']);

    Route::get('/orders', [\App\Http\Controllers\OrderController::class, 'index']);
    Route::get('/orders/{order}', [\App\Http\Controllers\OrderController::class, 'show']);
    Route::post('/orders', [\App\Http\Controllers\OrderController::class, 'store']);
    Route::put('/orders/{order}', [\App\Http\Controllers\OrderController::class, 'update']);
    Route::delete('/orders/{order}', [\App\Http\Controllers\OrderController::class, 'delete']);

    Route::get('/kit_orders', [\App\Http\Controllers\KitOrderController::class, 'index']);
    Route::get('/kit_orders/{kit_order}', [\App\Http\Controllers\KitOrderController::class, 'show']);
    Route::post('/kit_orders', [\App\Http\Controllers\KitOrderController::class, 'store']);
    Route::put('/kit_orders/{kit_order}', [\App\Http\Controllers\KitOrderController::class, 'update']);
    Route::delete('/kit_orders/{kit_order}', [\App\Http\Controllers\KitOrderController::class, 'delete']);
});

Route::get('/error', function () {
    return response()->json([
        'error' => 'Не авторизован',
    ]);
})->name('error');


//Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//    return $request->user();
//});
