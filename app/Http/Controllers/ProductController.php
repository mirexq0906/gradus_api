<?php

namespace App\Http\Controllers;


use App\Http\Requests\Product\StoreRequest;
use App\Http\Requests\Product\UpdateRequest;
use App\Http\Resources\ActionResource;
use App\Http\Resources\Product\IndexResource;
use App\Http\Resources\Product\ShowResource;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return IndexResource::collection($products);
    }

    public function store(StoreRequest $request)
    {
        try {
            $data = $request->validated();
            $product = Product::create($data);
            return new ActionResource($product);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function show(string $slug)
    {
        try {
            $product = Product::firstWhere('url', $slug);
            return new ShowResource($product);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function update(UpdateRequest $request, string $slug)
    {
        try {
            $data = $request->validated();
            $product = Product::firstWhere('url', $slug);
            $product->update($data);
            return new ActionResource($product);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function delete(string $slug)
    {
        try {
            $product = Product::firstWhere('url', $slug);
            $product->delete();
            return new ActionResource($product);
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }
}