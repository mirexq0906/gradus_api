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

    public function show($id)
    {
        try {
            $week_product = WeekProduct::where('product_id', $id)->first();
            return  new ShowResource($week_product->product);
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

    public function delete($id)
    {
        try {
            $week_product = WeekProduct::where('product_id', $id)->first();
            $week_product->delete();
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }
}
