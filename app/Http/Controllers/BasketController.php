<?php

namespace App\Http\Controllers;

use App\Http\Requests\Basket\DeleteRequest;
use App\Http\Requests\Basket\StoreRequest;
use App\Http\Resources\Basket\IndexResource;
use App\Models\Basket;
use Illuminate\Support\Facades\Auth;

class BasketController extends Controller
{
    public function index()
    {
        try {
            $user_id = Auth::user()->id;
            $basket = Basket::with(['product'])->where('user_id', $user_id)->get();
            return IndexResource::collection($basket->pluck('product'));
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function store(StoreRequest $request)
    {
        try {
            $user_id = Auth::user()->id;
            $product_id = $request->product_id;
            $record = Basket::firstOrCreate(['user_id' => $user_id, 'product_id' => $product_id]);

            if ($record->wasRecentlyCreated) {
                return response()->json([
                    'message' => 'Товар успешно добавлен в корзину',
                ]);
            } else {
                return response()->json([
                    'message' => 'Товар уже есть в корзине',
                ]);
            }
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function delete(DeleteRequest $request)
    {
        try {
            $user_id = Auth::user()->id;
            $product_id = $request->product_id;
            $record = Basket::where('user_id', $user_id)->where('product_id', $product_id)->first();

            if (!$record) {
                return response()->json([
                    'message' => 'Товар не найден в корзине',
                ], 404);
            }

            $record->delete();
            return response()->json([
                'message' => "Товар успешно удалён из корзины",
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }
}
