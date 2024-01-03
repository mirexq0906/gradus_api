<?php

namespace App\Http\Resources\Auth;

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
            'name' => $this['name'],
            'email'=> $this['email'],
            'date'=> $this['userData']->date,
            'phone'=> $this['userData']->phone,
            'adress'=> $this['userData']->adress,
        ];
    }
}
