<?php

namespace App\Http\Controllers;


use App\Http\Requests\KitOrder\StoreRequest;
use App\Http\Requests\KitOrder\UpdateRequest;
use App\Http\Resources\KitOrder\IndexResource;
use App\Http\Resources\KitOrder\ShowResource;
use App\Models\KitOrder;

class KitOrderController extends Controller
{
    public function index()
    {
        try {
            $orders = KitOrder::all();
            return IndexResource::collection($orders);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function show(KitOrder $kitOrder)
    {
        try {
            return new ShowResource($kitOrder);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function store(StoreRequest $request)
    {
        try {
            $data = $request->all();
            KitOrder::create($data);
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function update(UpdateRequest $request, KitOrder $kitOrder)
    {
        try {
            $data = $request->all();
            $kitOrder->update($data);
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function delete(KitOrder $kitOrder)
    {
        try {
            $kitOrder->delete();
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }
}
