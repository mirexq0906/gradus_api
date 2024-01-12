<?php

namespace App\Http\Controllers;


use App\Http\Requests\DataRequest;
use App\Http\Requests\Video\StoreRequest;
use App\Http\Requests\Video\UpdateRequest;
use App\Http\Resources\Video\IndexResource;
use App\Http\Resources\Video\ShowResource;
use App\Models\Video;
use Illuminate\Support\Facades\Storage;

class VideoController extends Controller
{
    public function index(DataRequest $request)
    {
        try {
            $data = $request->all();
            $videos =  $this->dataProcessor->processData($data, Video::query());
            return IndexResource::collection($videos);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function show(Video $video)
    {
        try {
            return new ShowResource($video);
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
            if ($request->hasFile('img')) {
                $data['img'] = $this->imageLoader->oneLoadImage($request->file('img'), $video->img);
            }
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
