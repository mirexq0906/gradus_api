<?php

namespace App\Http\Controllers;


use App\Http\Requests\DataRequest;
use App\Http\Requests\WeekProduct\DeleteRequest;
use App\Http\Requests\WeekProduct\StoreRequest;
use App\Http\Resources\WeekProduct\IndexResource;
use App\Http\Resources\WeekProduct\ShowResource;
use App\Models\WeekProduct;

class WeekProductController extends Controller
{
    public function index(DataRequest $request)
    {
        try {
            $data = $request->all();
            $weekProducts = WeekProduct::with(['product'])->get();
            return IndexResource::collection($weekProducts->pluck('product'));
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function show(WeekProduct $weekProduct)
    {
        try {
            return  new ShowResource($weekProduct->product);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function store(StoreRequest $request)
    {
        try {
            $product_id = $request->product_id;
            $record = WeekProduct::firstOrCreate(['product_id' => $product_id]);

            if ($record->wasRecentlyCreated) {
                return response()->json([
                    'message' => 'Товар успешно добавлен',
                ]);
            } else {
                return response()->json([
                    'message' => 'Товар уже есть',
                ]);
            }
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function delete(WeekProduct $weekProduct)
    {
        try {
            $weekProduct->delete();
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }
}
