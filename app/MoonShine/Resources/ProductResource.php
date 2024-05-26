<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use App\Models\Basket;
use App\Models\Favorite;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;
use App\Models\Review;
use App\Models\WeekProduct;
use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;
use MoonShine\Enums\PageType;
use MoonShine\Fields\Text;
use MoonShine\Fields\Image;
use MoonShine\Fields\Number;
use MoonShine\Fields\Slug;
use MoonShine\Fields\Relationships\BelongsTo;
use Illuminate\Contracts\Database\Eloquent\Builder;
use MoonShine\Fields\Switcher;
use MoonShine\Fields\RangeSlider;

/**
 * @extends ModelResource<Product>
 */
class ProductResource extends ModelResource
{
    protected string $model = Product::class;

    protected string $title = 'Товары';

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
                Text::make('Название товара', 'name'),
                Image::make('Изображение', 'img')->removable(),
                Image::make('Галерея', 'gallery')->removable()->multiple(),
                Slug::make('Slug', 'url')->from('name')->unique()->hideOnIndex(),
                Slug::make('Путь (path)', 'path')->from('name')->unique()->hideOnIndex(),
                Number::make('Новая цена', 'price'),
                Number::make('Старая цена', 'oldPrice'),
                Text::make('Описание', 'desc')->hideOnIndex(),
                BelongsTo::make('Название подкатегории', 'subCategory', 'name', new SubCategoryResource())
                    ->searchable()
                    ->valuesQuery(fn (Builder $query) => $query->limit(10)),
                BelongsTo::make('Название категории', 'category', 'name', new CategoryResource())
                    ->searchable()
                    ->valuesQuery(fn (Builder $query) => $query->limit(10))
            ]),
        ];
    }

    public function filters(): array
    {
        return [
            Text::make('Название категории', 'name')->placeholder('Введите название'),
            Text::make('Slug', 'url')->placeholder('Введите slug'),
            RangeSlider::make('Новая цена', 'price')->max($this->getMaxPrice()),
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
        return Product::max('price') ?? 100;
    }

    protected function beforeDeleting(Model $item): Model
    {
        WeekProduct::where('product_id', $item->id)->delete();
        Review::where('product_id', $item->id)->delete();
        Basket::where('product_id', $item->id)->delete();
        Favorite::where('product_id', $item->id)->delete();
        return $item;
    }

    public function rules(Model $item): array
    {
        return [
            'name' => ['required', 'string', 'unique:App\Models\Category'],
            'img' => ['required'],
            'gallery' => ['required'],
            'price' => ['required'],
            'oldPrice' => ['required'],
            'desc' => ['required', 'string'],
        ];
    }
}
