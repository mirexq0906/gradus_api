<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Video>
 */
class VideoFactory extends Factory
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
            'url' => "https://youtu.be/ScKBh1aT-A4?si=BRpEsuNIMU1oGqPS",
            'img' => fake()->imageUrl(),
            'category_id' => Category::all()->random()->id
        ];
    }
}
