<?php

namespace App\Http\Controllers;


use App\Http\Requests\Blog\IndexRequest;
use App\Http\Requests\Blog\StoreRequest;
use App\Http\Requests\Blog\UpdateRequest;
use App\Http\Resources\Blog\IndexResource;
use App\Http\Resources\Blog\ShowResource;
use App\Models\Blog;

class BlogController extends Controller
{
    public function index(IndexRequest $request)
    {
        try {
            $limit = $request->limit;
            $videos = Blog::all();
            return IndexResource::collection($limit ? $videos->take($limit) : $videos);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function show($slug)
    {
        try {
            $blog = Blog::where('url', $slug)->first();
            return new ShowResource($blog);
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
            Blog::create($data);
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function update(UpdateRequest $request, $slug)
    {
        try {
            $data = $request->all();
            $blog = Blog::where('url', $slug)->first();
            $blog->update($data);
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function delete($slug)
    {
        try {
            $blog = Blog::where('url', $slug)->first();
            $blog->delete();
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }
}
