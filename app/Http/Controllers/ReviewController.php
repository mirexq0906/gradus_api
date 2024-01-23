<?php

namespace App\Http\Controllers;

use App\Http\Requests\DataRequest;
use App\Http\Requests\Review\StoreRequest;
use App\Http\Resources\Blog\IndexResource;
use App\Models\Blog;
use App\Models\Review;

class ReviewController extends Controller
{
    public function store(StoreRequest $request)
    {
        try {
            $data = $request->all();
            $data['user_id'] = auth()->id();
            $data['user'] = auth()->user()->name;
            $record = Review::where('user_id', $data['user_id'])->where('product_id', $data['product_id'])->first();
            if($record) {
                return response()->json(['message' => 'Отзыв уже оставлен']);
            }
            Review::create($data);
            return response()->json(['message' => 'Успешно']);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }
}
