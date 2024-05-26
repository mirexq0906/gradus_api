<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReviewFactory extends Factory
{

    public function definition(): array
    {
        $user = User::all()->random();
        $product = Product::all()->random();
        return [
            'user' => $user->name,
            'user_id' => $user->id,
            'product_id' => $product->id,
            'title' => fake()->text(15),
            'content' => fake()->text(),
            'rating' => random_int(1, 5)
        ];
    }
}
