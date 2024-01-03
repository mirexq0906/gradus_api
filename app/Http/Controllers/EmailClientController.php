<?php

namespace App\Http\Controllers;


use App\Http\Requests\EmailClient\StoreRequest;
use App\Http\Requests\EmailClient\UpdateRequest;
use App\Http\Resources\EmailClient\IndexResource;
use App\Http\Resources\EmailClient\ShowResource;
use App\Models\EmailClient;

class EmailClientController extends Controller
{
    public function index()
    {
        try {
            $emailClients = EmailClient::all();
            return IndexResource::collection($emailClients);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function show(EmailClient $emailClient)
    {
        try {
            return new ShowResource($emailClient);
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
            EmailClient::create($data);
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function update(UpdateRequest $request, EmailClient $emailClient)
    {
        try {
            $data = $request->all();
            $emailClient->update($data);
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function delete(EmailClient $emailClient)
    {
        try {
            $emailClient->delete();
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }
}
