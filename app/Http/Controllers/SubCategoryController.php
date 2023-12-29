<?php

namespace App\Http\Controllers;

use App\Http\Requests\SubCategory\StoreRequest;
use App\Http\Requests\SubCategory\UpdateRequest;
use App\Http\Resources\ActionResource;
use App\Http\Resources\SubCategory\IndexResource;
use App\Http\Resources\SubCategory\ShowResource;
use App\Models\SubCategory;

class SubCategoryController extends Controller
{
    public function index()
    {
        try {
            $subCategories = SubCategory::all();
            return IndexResource::collection($subCategories);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function show(string $slug)
    {
        try {
            $subCategory = SubCategory::firstWhere('url', $slug);
            $products = $subCategory->products;
            $subCategory['products'] = $products;
            return new ShowResource($subCategory);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function store(StoreRequest $request)
    {
        try {
            $data = $request->validated();
            $subCategory = SubCategory::create($data);
            return new ActionResource($subCategory);
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
            return new ActionResource($subCategory);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function delete(string $slug)
    {
        try {
            $subCategory = SubCategory::firstWhere('url', $slug);
            $subCategory->delete();
            return new ActionResource($subCategory);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }
}
