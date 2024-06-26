<?php

namespace App\Http\Controllers;

use App\Http\Requests\Category\ShowRequest;
use App\Http\Requests\Category\StoreRequest;
use App\Http\Requests\Category\UpdateRequest;
use App\Http\Requests\DataRequest;
use App\Http\Resources\Category\IndexResource;
use App\Http\Resources\Category\ShowResource;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index(DataRequest $request)
    {
        try {
            $data = $request->all();
            $categories =  $this->dataProcessor->processData($data, Category::query());
            return IndexResource::collection($categories);
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
            Category::create($data);
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function show(ShowRequest $request, string $slug)
    {
        try {
            $category = Category::with(['subCategories', 'products', 'videos', 'blogs'])->firstWhere('url', $slug);

            $subCategories = $request->limit_sub_categories ? $category->subCategories->take($request->limit_sub_categories) : $category->subCategories;
            $products = $request->limit_products ? $category->products->take($request->limit_products) : $category->products;
            $videos = $request->limit_videos ? $category->videos->take($request->limit_videos) : $category->videos;
            $blogs = $request->limit_blogs ? $category->blogs->take($request->limit_blogs) : $category->blogs;

            $category['sub_categories'] = $subCategories;
            $category['products'] = $products;
            $category['videos'] = $videos;
            $category['blogs'] = $blogs;

            return new ShowResource($category);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function update(UpdateRequest $request, string $slug)
    {
        try {
            $data = $request->all();
            $category = Category::firstWhere('url', $slug);
            $category->update($data);
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function delete(string $slug)
    {
        try {
            $category = Category::firstWhere('url', $slug);
            $category->delete();
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }
}
