<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->text(15),
            'img' => fake()->imageUrl(),
            'gallery' => json_encode($this->getGallery()),
            'url' => fake()->text(15),
            'price' => random_int(1000, 10000),
            'oldPrice' => random_int(1000, 10000),
            'desc' => fake()->text(),
            'subCategory_id' => SubCategory::all()->random()->id,
            'category_id' => Category::all()->random()->id
        ];
    }
    public function getGallery():array
    {
        $gallery = [];
        for ($i = 1; $i <= 5; $i++) {
            array_push($gallery, fake()->imageUrl());
        }
        return $gallery;
    }
}
