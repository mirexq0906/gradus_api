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
            $productsQuery = Product::query()->with('reviews');
            $products =  $this->dataProcessor->processData($data, $productsQuery);
            foreach ($products as $product) {
                $product['rating'] = $this->countRating($product->reviews);
            }
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
            $data = $request->validated();
            if ($request->hasFile('img')) {
                $data['img'] = $this->imageLoader->oneLoadImage($request->file('img'));
            }
            $data['gallery'] = $this->imageLoader->manyLoadImage($data['gallery']);
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
            $product = Product::with('reviews')->firstWhere('url', $slug);
            foreach ($product->reviews as $review) {
                unset($review->user_id, $review->product_id);
            }
            $product['rating'] = $this->countRating($product->reviews);
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

    public function countRating($arr)
    {
        $totalRating = 0;
        $totalReviews = count($arr);

        foreach ($arr as $review) {
            $totalRating += $review['rating'];
        }

        $averageRating = $totalReviews > 0 ? $totalRating / $totalReviews : 0;

        return $averageRating;
    }
}
