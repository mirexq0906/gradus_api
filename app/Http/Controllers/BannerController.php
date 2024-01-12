<?php

namespace App\Http\Controllers;


use App\Http\Requests\Banner\StoreRequest;
use App\Http\Requests\Banner\UpdateRequest;
use App\Http\Requests\DataRequest;
use App\Http\Resources\Banner\IndexResource;
use App\Http\Resources\Banner\ShowResource;
use App\Models\Banner;

class BannerController extends Controller
{
    public function index(DataRequest $request)
    {
        try {
            $data = $request->all();
            $banners =  $this->dataProcessor->processData($data, Banner::query());
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
            if ($request->hasFile('img')) {
                $data['img'] = $this->imageLoader->oneLoadImage($request->file('img'));
            }
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
            if ($request->hasFile('img')) {
                $data['img'] = $this->imageLoader->oneLoadImage($request->file('img'), $banner->img);
            }
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
