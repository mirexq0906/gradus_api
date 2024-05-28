<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\RecomendProduct;

use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;
use MoonShine\Fields\Relationships\BelongsTo;
use Illuminate\Contracts\Database\Eloquent\Builder;

/**
 * @extends ModelResource<RecomendProduct>
 */
class RecomendProductResource extends ModelResource
{
    protected string $model = RecomendProduct::class;

    protected string $title = 'Рекомендованные товары';


    public function fields(): array
    {
        return [
            Block::make([
                ID::make()->sortable(),
                BelongsTo::make('Имя пользователя', 'user', 'name', new UserResource()),
                BelongsTo::make('Email пользователя', 'user', 'email', new UserResource()),
                BelongsTo::make('Название продукта', 'product', 'name', new ProductResource()),
                BelongsTo::make('Цена', 'product', 'price', new ProductResource()),
                BelongsTo::make('Картинка', 'product', 'img', new ProductResource()),
            ]),
        ];
    }

    public function filters(): array
    {
        return [
            BelongsTo::make('Email пользователя', 'user', 'email', new UserResource()),
            BelongsTo::make('Название продукта', 'product', 'name', new ProductResource())
                ->searchable()
                ->valuesQuery(fn (Builder $query) => $query->limit(10)),
        ];
    }

    public function getActiveActions(): array
    {
        return [];
    }

    public function rules(Model $item): array
    {
        return [];
    }
}
