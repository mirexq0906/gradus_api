<?php

namespace App\Http\Controllers;


use App\Http\Requests\CallClient\StoreRequest;
use App\Http\Requests\CallClient\UpdateRequest;
use App\Http\Requests\DataRequest;
use App\Http\Resources\CallClient\IndexResource;
use App\Http\Resources\CallClient\ShowResource;
use App\Models\CallClient;

class CallClientController extends Controller
{
    public function index(DataRequest $request)
    {
        try {
            $data = $request->all();
            $callClients =  $this->dataProcessor->processData($data, CallClient::query());
            return IndexResource::collection($callClients);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function show(CallClient $callClient)
    {
        try {
            return new ShowResource($callClient);
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
            CallClient::create($data);
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function update(UpdateRequest $request, CallClient $callClient)
    {
        try {
            $data = $request->all();
            $callClient->update($data);
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function delete(CallClient $callClient)
    {
        try {
            $callClient->delete();
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }
}
