<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\KitOrder;

use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;
use MoonShine\Fields\Field;
use MoonShine\Components\MoonShineComponent;
use MoonShine\Fields\Text;
use MoonShine\Fields\Number;
use Illuminate\Contracts\Database\Eloquent\Builder;
use MoonShine\Fields\Switcher;
use MoonShine\Fields\RangeSlider;

class KitOrderResource extends ModelResource
{
    protected string $model = KitOrder::class;

    protected string $title = 'Заказы с конструктора';

    protected bool $isAsync = true;

    protected int $itemsPerPage = 10;

    public function search(): array
    {
        return ['id', 'phone', 'fullName'];
    }

    public function fields(): array
    {
        return [
            Block::make([
                ID::make()->sortable(),
                Text::make('Заказаные товары', 'products')->hideOnIndex(),
                Text::make('Телефон', 'phone'),
                Text::make('ФИО', 'fullName'),
                Number::make('Сумма заказа', 'totalPrice')
            ]),
        ];
    }

    public function filters(): array
    {
        return [
            RangeSlider::make('Сумма заказа', 'totalPrice')->max($this->getMaxPrice()),
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
        return KitOrder::max('totalPrice') ?? 100;
    }

    public function rules(Model $item): array
    {
        return [];
    }
}
