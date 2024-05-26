<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\Order;

use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;
use MoonShine\Fields\Number;
use MoonShine\Fields\Text;
use Illuminate\Contracts\Database\Eloquent\Builder;
use MoonShine\Fields\Switcher;
use MoonShine\Fields\RangeSlider;

class OrderResource extends ModelResource
{
    protected string $model = Order::class;

    protected string $title = 'Заказы';

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
                Text::make('Статус', 'status'),
                Text::make('Телефон', 'phone'),
                Text::make('ФИО', 'fullName'),
                Text::make('email')->hideOnIndex(),
                Text::make('Адресс', 'adress')->hideOnIndex(),
                Text::make('Способ оплаты', 'payment')->hideOnIndex(),
                Text::make('Доставка', 'delivery')->hideOnIndex(),
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
        return Order::max('totalPrice') ?? 100;
    }


    public function getActiveActions(): array
    {
        return ['view', 'delete'];
    }

    public function rules(Model $item): array
    {
        return [];
    }
}
