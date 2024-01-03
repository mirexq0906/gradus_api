<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Video>
 */
class BlogFactory extends Factory
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
            'url' => fake()->unique()->slug(1),
            'desc' => fake()->text(),
            'detailed' => fake()->text(),
            'img' => fake()->imageUrl(),
            'views' => random_int(1, 1000),
            'category_id' => Category::all()->random()->id
        ];
    }
}
