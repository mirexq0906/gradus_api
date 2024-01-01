<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Basket;
use App\Models\Category;
use App\Models\Favorite;
use App\Models\Product;
use App\Models\SubCategory;
use App\Models\User;
use App\Models\Video;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();
        Category::factory(10)->create();
        SubCategory::factory(50)->create();
        Product::factory(200)->create();
        Video::factory(150)->create();
//        User::factory(10)->create();
//        Basket::factory(150)->create();
//        Favorite::factory(150)->create();
        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
