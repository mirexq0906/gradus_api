<?php

namespace App\Http\Controllers;


use App\Http\Requests\Banner\StoreRequest;
use App\Http\Requests\Banner\UpdateRequest;
use App\Http\Resources\Banner\IndexResource;
use App\Http\Resources\Banner\ShowResource;
use App\Models\Banner;

class BannerController extends Controller
{
    public function index()
    {
        try {
            $banners = Banner::all();
            return IndexResource::collection($banners);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function show(Banner $banner)
    {
        try {
            return new ShowResource($banner);
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
            Banner::create($data);
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function update(UpdateRequest $request, Banner $banner)
    {
        try {
            $data = $request->all();
            $banner->update($data);
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function delete(Banner $banner)
    {
        try {
            $banner->delete();
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }
}
