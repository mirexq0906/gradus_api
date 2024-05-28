<?php

namespace App\Http\Controllers;

use App\Models\RecomendProduct;
use Illuminate\Support\Facades\Auth;

class RecomendController extends Controller
{
    public function index()
    {
        try {
            $userId = Auth::user()->id;
            $products = RecomendProduct::with('product')->where('user_id', $userId)->get()->toArray();
            $responseData = [];
            foreach ($products as $item) {
                $responseData[] = $item['product'];
            }
            return response(['data' => $responseData]);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }
}
