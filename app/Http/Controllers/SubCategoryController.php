<?php

namespace App\Http\Controllers;

use App\Http\Requests\SubCategory\StoreRequest;
use App\Http\Requests\SubCategory\UpdateRequest;
use App\Http\Resources\SubCategoryResource;
use App\Models\Category;
use App\Models\SubCategory;

class SubCategoryController extends Controller
{
    public function index()
    {
        try {
            $subCategories = SubCategory::all();
            return new SubCategoryResource($subCategories);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function show(string $slug)
    {
        try {
            $subCategory = SubCategory::firstWhere('url', $slug);
            return new SubCategoryResource($subCategory);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function store(StoreRequest $request)
    {
        try {
            $data = $request->validated();
            $subCategory = SubCategory::create($data);
            return new SubCategoryResource($subCategory);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function update(UpdateRequest $request, string $slug)
    {
        try {
            $data = $request->validated();
            $subCategory = SubCategory::firstWhere('url', $slug);
            $subCategory->update($data);
            return new SubCategoryResource($subCategory);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function delete(string $slug)
    {
        try {
            $subCategory = SubCategory::firstWhere('url', $slug);
            $subCategory->delete();
            return new SubCategoryResource($subCategory);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }
}
