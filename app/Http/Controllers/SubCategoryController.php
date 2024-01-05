<?php

namespace App\Http\Controllers;

use App\Http\Requests\DataRequest;
use App\Http\Requests\SubCategory\StoreRequest;
use App\Http\Requests\SubCategory\UpdateRequest;
use App\Http\Resources\SubCategory\IndexResource;
use App\Http\Resources\SubCategory\ShowResource;
use App\Models\SubCategory;

class SubCategoryController extends Controller
{
    public function index(DataRequest $request)
    {
        try {
            $data = $request->all();
            $subCategories = $this->dataProcessor->processData($data, SubCategory::query());
            return IndexResource::collection($subCategories);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function show(DataRequest $request,string $slug)
    {
        try {
            $data = $request->all();
            $subCategory = SubCategory::with('products')->firstWhere('url', $slug);
            $subCategory['products'] = $this->dataProcessor->processData($data, $subCategory->products());
            return new ShowResource($subCategory);
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
            SubCategory::create($data);
            return response()->json(['message' => 'Успешно']);
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
            $subCategory = SubCategory::firstWhere('url', $slug);
            $subCategory->update($data);
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
            $subCategory = SubCategory::firstWhere('url', $slug);
            $subCategory->delete();
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }
}
