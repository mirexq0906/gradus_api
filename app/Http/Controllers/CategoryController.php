<?php

namespace App\Http\Controllers;

use App\Http\Requests\Category\StoreRequest;
use App\Http\Requests\Category\UpdateRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return new CategoryResource($categories);
    }

    public function store(StoreRequest $request)
    {
        try {
            $data = $request->validated();
            $category = Category::create($data);
            return new CategoryResource($category);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function show(string $slug)
    {
        try {
            $category = Category::firstWhere('url', $slug);
            $category->subCategories;
            $category->products;
            return new CategoryResource($category);
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
            return new CategoryResource($category);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function delete(string $slug)
    {
        try {
            $category = Category::firstWhere('url', $slug);
            $category->delete();
            return new CategoryResource($category);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }
}
