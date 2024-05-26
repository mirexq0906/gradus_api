<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\Review;
use App\Models\User;
use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;
use MoonShine\Fields\Text;
use MoonShine\Fields\Number;
use MoonShine\Fields\Relationships\BelongsTo;
use Illuminate\Contracts\Database\Eloquent\Builder;
use MoonShine\Fields\Field;
use MoonShine\Fields\Select;

/**
 * @extends ModelResource<Review>
 */
class ReviewResource extends ModelResource
{
    protected string $model = Review::class;

    protected string $title = 'Отзывы о товарах';

    protected bool $isAsync = true;

    protected int $itemsPerPage = 10;

    public function search(): array
    {
        return ['id', 'title'];
    }

    public function fields(): array
    {
        return [
            Block::make([
                ID::make()->sortable(),
                Text::make('Заголовок отзыва', 'title'),
                Text::make('Описание отзыва', 'content'),
                Number::make('Рейтинг', 'rating')->stars(),
                BelongsTo::make('Товар', 'product', 'name', new ProductResource())
                    ->searchable()
                    ->valuesQuery(fn (Builder $query) => $query->limit(10)),
                Text::make('Пользователь')->changeFill(function ($value) {
                    return User::where('id', $value->user_id)->first()->name;
                })
            ]),
        ];
    }

    public function getActiveActions(): array
    {
        return ['view'];
    }

    public function filters(): array
    {
        return [
            Text::make('Заголовок отзыва', 'title')->placeholder('Введите название'),
            BelongsTo::make('Товар', 'product', 'name', new ProductResource())
                ->searchable()
                ->valuesQuery(fn (Builder $query) => $query->limit(10))
                ->nullable(),
            Select::make('Пользователь')
                ->options($this->getUsers())
                ->onApply(function (Builder $query, $value) {
                    return $query->where('user_id', $value);
                })
                ->nullable(),
            Number::make('Рейтинг', 'rating')->stars(),
        ];
    }

    public function rules(Model $item): array
    {
        return [];
    }

    public function getUsers()
    {
        $users = Review::with('user')->get()->toArray();
        $options = [];
        foreach ($users as $item) {
            $options[$item['user_id']] = $item['user']['name'];
        };
        return $options;
    }
}
