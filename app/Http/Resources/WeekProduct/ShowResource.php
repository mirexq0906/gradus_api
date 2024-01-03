<?php

namespace App\Http\Resources\WeekProduct;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this['id'],
            'name' => $this['name'],
            'img' => $this['img'],
            'gallery' => $this['gallery'],
            'url' => $this['url'],
            'price' => $this['price'],
            'oldPrice' => $this['oldPrice'],
            'desc' => $this['desc'],
            'subCategory_id' => $this['subCategory_id'],
            'category_id' => $this['category_id'],
            'created_at' => $this['created_at'],
            'updated_at' => $this['updated_at'],
        ];
    }
}
