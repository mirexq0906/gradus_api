<?php

namespace App\Http\Controllers;

use App\Http\Requests\Category\ShowRequest;
use App\Http\Requests\Category\StoreRequest;
use App\Http\Requests\Category\UpdateRequest;
use App\Http\Resources\ActionResource;
use App\Http\Resources\Category\IndexResource;
use App\Http\Resources\Category\ShowResource;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return IndexResource::collection($categories);
    }

    public function store(StoreRequest $request)
    {
        try {
            $data = $request->validated();
            $category = Category::create($data);
            return new ActionResource($category);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function show(ShowRequest $request, string $slug)
    {
        try {
            $category = Category::with(['subCategories', 'products', 'videos'])->firstWhere('url', $slug);

            $subCategories = $request->limit_sub_categories ? $category->subCategories->take($request->limit_sub_categories) : $category->subCategories;
            $products = $request->limit_products ? $category->products->take($request->limit_products) : $category->products;
            $videos = $request->limit_videos ? $category->videos->take($request->limit_videos) : $category->videos;

            $category['sub_categories'] = $subCategories;
            $category['products'] = $products;
            $category['videos'] = $videos;

            return new ShowResource($category);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function update(UpdateRequest $request, string $slug)
    {
        try {
            $data = $request->validated();
            $category = Category::firstWhere('url', $slug);
            $category->update($data);
            return new ActionResource($category);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function delete(string $slug)
    {
        try {
            $category = Category::firstWhere('url', $slug);
            $category->delete();
            return new ActionResource($category);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }
}
