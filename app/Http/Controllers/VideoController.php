<?php

namespace App\Http\Controllers;


use App\Http\Requests\Video\IndexRequest;
use App\Http\Requests\Video\StoreRequest;
use App\Http\Requests\Video\UpdateRequest;
use App\Http\Resources\Video\IndexResource;
use App\Models\Video;

class VideoController extends Controller
{
    public function index(IndexRequest $request)
    {
        try {
            $limit = $request->limit;
            $videos = Video::all();
            return IndexResource::collection($limit ? $videos->take($limit) : $videos);
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
            Video::create($data);
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function update(UpdateRequest $request, Video $video)
    {
        try {
            $data = $request->all();
            $video->update($data);
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function delete(Video $video)
    {
        try {
            $video->delete();
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }
}
