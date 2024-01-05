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
        $subCategory = SubCategory::all()->random();
        $category = Category::all()->random();
        $url = fake()->unique()->slug(3);
        return [
            'name' => fake()->text(15),
            'img' => fake()->imageUrl(),
            'gallery' => json_encode($this->getGallery()),
            'url' => $url,
            'path' => '/' . $category->url . '/' . $subCategory->url . '/' . $url,
            'price' => random_int(1000, 10000),
            'oldPrice' => random_int(1000, 10000),
            'desc' => fake()->text(),
            'subCategory_id' => $subCategory->id,
            'category_id' => $category->id
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
