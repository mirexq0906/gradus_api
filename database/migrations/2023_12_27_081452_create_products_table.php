<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('img');
            $table->text('gallery');
            $table->string('url')->unique();
            $table->string('path')->unique();
            $table->integer('price');
            $table->integer('oldPrice');
            $table->text('desc');
            $table->unsignedBigInteger('subCategory_id');
            $table->unsignedBigInteger('category_id');
            $table->foreign('subCategory_id')->references('id')->on('sub_categories');
            $table->foreign('category_id')->references('id')->on('categories');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
