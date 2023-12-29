<?php

namespace App\Http\Controllers;


use App\Http\Requests\Video\StoreRequest;
use App\Http\Requests\Video\UpdateRequest;
use App\Http\Resources\ActionResource;
use App\Http\Resources\Video\IndexResource;
use App\Models\Video;

class VideoController extends Controller
{
    public function index()
    {
        try {
            $videos = Video::all();
            return IndexResource::collection($videos);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function store(StoreRequest $request)
    {
        try {
            $data = $request->validated();
            $video = Video::create($data);
            return new ActionResource($video);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function update(UpdateRequest $request, Video $video)
    {
        try {
            $data = $request->validated();
            $video->update($data);
            return new ActionResource($video);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function delete(Video $video)
    {
        try {
            $video->delete();
            return new ActionResource($video);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }
}
