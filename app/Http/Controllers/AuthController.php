<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\Auth\UpdateRequest;
use App\Http\Resources\Auth\RegisterResource;
use App\Http\Resources\Auth\ShowResource;
use App\Models\User;
use App\Http\Controllers\Controller;
use App\Models\UserData;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        try {
            $credentials = $request->all();
            if (auth()->attempt($credentials)) {
                $user = Auth::user();
                $user['token'] = $user->createToken('Laravelia')->accessToken;
                return new RegisterResource($user);
            }
            return response()->json([
                'error' => 'Неверные данные для входа'
            ], 402);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function register(RegisterRequest $request)
    {
        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            UserData::create(['user_id' => $user->id]);

            return new RegisterResource($user);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function logout()
    {
        try {
            Auth::user()->tokens()->delete();
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function show()
    {
        try {
            $user_id = Auth::user()->id;
            $data = User::where('id', $user_id)->with('userData')->first();
            $data['userData'] = $data->userData;
            return new ShowResource($data);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function update(UpdateRequest $request)
    {
        try {
            $data = $request->all();
            $user_id = Auth::user()->id;
            $userData = UserData::where('user_id', $user_id)->first();
            $userData->update($data);
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }
}
