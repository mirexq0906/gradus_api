<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use App\Models\Product;
use Illuminate\Database\Eloquent\Model;
use App\Models\WeekProduct;

use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;
use MoonShine\Fields\Text;
use MoonShine\Fields\Relationships\BelongsTo;
use Illuminate\Contracts\Database\Eloquent\Builder;
use MoonShine\Enums\PageType;
use MoonShine\Fields\RangeSlider;
use MoonShine\Fields\Switcher;

/**
 * @extends ModelResource<WeekProduct>
 */
class WeekProductResource extends ModelResource
{
    protected string $model = WeekProduct::class;

    protected string $title = 'Товары недели';

    protected bool $isAsync = true;

    protected int $itemsPerPage = 10;

    protected ?PageType $redirectAfterSave = PageType::INDEX;

    public function search(): array
    {
        return ['id', 'name'];
    }

    public function fields(): array
    {
        return [
            Block::make([
                ID::make()->sortable(),
                BelongsTo::make('Название товара', 'product', 'name', new CategoryResource())
                    ->searchable()
                    ->valuesQuery(fn (Builder $query) => $query->limit(10)),
                BelongsTo::make('Цена товара', 'product', 'price', new CategoryResource())->hideOnForm(),
            ]),
        ];
    }

    public function filters(): array
    {
        return [
            BelongsTo::make('Название товара', 'product', 'name', new CategoryResource()),
            RangeSlider::make('Новая цена')
                ->max($this->getMaxPrice())
                ->onApply(function (Builder $query, $value) {
                    $query->whereHas('product', function ($query) use ($value) {
                        $query->whereBetween('price', [$value['from'], $value['to']]);
                    });

                    return $query;
                }),
            Switcher::make('Показать удаленные')->onApply(function (Builder $query, $value) {
                if ($value) {
                    return $query->onlyTrashed();
                } else {
                    return $query;
                }
            })
        ];
    }

    public function getMaxPrice()
    {
        return Product::max('price');
    }

    public function rules(Model $item): array
    {
        return [];
    }
}
