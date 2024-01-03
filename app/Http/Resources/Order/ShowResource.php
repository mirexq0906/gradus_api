<?php

namespace App\Http\Resources\Order;

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
            'products' => $this['products'],
            'status' => $this['status'],
            'phone' => $this['phone'],
            'fullName' => $this['fullName'],
            'email' => $this['email'],
            'adress' => $this['adress'],
            'payment' => $this['payment'],
            'delivery' => $this['delivery'],
            'totalPrice' => $this['totalPrice'],
            'created_at' => $this['created_at'],
            'updated_at' => $this['updated_at'],
        ];
    }
}
