<?php

namespace App\Http\Controllers;


use App\Http\Requests\Favorite\DeleteRequest;
use App\Http\Requests\Favorite\StoreRequest;
use App\Http\Resources\Favorite\IndexResource;
use App\Models\Favorite;
use Illuminate\Support\Facades\Auth;

class FavoriteController extends Controller
{
    public function index()
    {
        try {
            $user_id = Auth::user()->id;
            $basket = Favorite::with(['product'])->where('user_id', $user_id)->get();
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
            $record = Favorite::firstOrCreate(['user_id' => $user_id, 'product_id' => $product_id]);

            if ($record->wasRecentlyCreated) {
                return response()->json([
                    'message' => 'Товар успешно добавлен в избранное',
                ]);
            } else {
                return response()->json([
                    'message' => 'Товар уже есть в избранных',
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
            $record = Favorite::where('user_id', $user_id)->where('product_id', $product_id)->first();

            if (!$record) {
                return response()->json([
                    'message' => 'Товар не найден в избранных',
                ], 404);
            }

            $record->delete();
            return response()->json([
                'message' => "Товар успешно удалён из избранных",
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }
}
