<?php

namespace App\Http\Controllers;


use App\Http\Requests\DataRequest;
use App\Http\Requests\Product\StoreRequest;
use App\Http\Requests\Product\UpdateRequest;
use App\Http\Resources\Product\IndexResource;
use App\Http\Resources\Product\ShowResource;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index(DataRequest $request)
    {
        try {
            $data = $request->all();
            $products =  $this->dataProcessor->processData($data, Product::query());
            return IndexResource::collection($products);
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
            if($request->hasFile('gallery')) {
                $data['gallery'] = $this->imageLoader->manyLoadImage($request->file('gallery'));
            }
            Product::create($data);
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function show(string $slug)
    {
        try {
            $product = Product::firstWhere('url', $slug);
            return new ShowResource($product);
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
            $product = Product::firstWhere('url', $slug);
            if ($request->hasFile('img')) {
                $data['img'] = $this->imageLoader->oneLoadImage($request->file('img'), $product->img);
            }
            if($request->hasFile('gallery')) {
                $data['gallery'] = $this->imageLoader->manyLoadImage($request->file('gallery'), $product->gallery);
            }
            $product->update($data);
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
            $product = Product::firstWhere('url', $slug);
            $product->delete();
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }
}
