<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\CallClient;

use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;
use MoonShine\Fields\Field;
use MoonShine\Components\MoonShineComponent;
use MoonShine\Fields\Text;

/**
 * @extends ModelResource<CallClient>
 */
class CallClientResource extends ModelResource
{
    protected string $model = CallClient::class;

    protected string $title = 'Обратная связь';

    protected bool $isAsync = true;

    protected int $itemsPerPage = 10;

    public function search(): array
    {
        return ['id', 'name'];
    }

    public function fields(): array
    {
        return [
            Block::make([
                ID::make()->sortable(),
                Text::make('Имя пользователя', 'name'),
                Text::make('Телефон', 'phone')
            ]),
        ];
    }

    public function getActiveActions(): array
    {
        return ['delete'];
    }

    public function rules(Model $item): array
    {
        return [];
    }
}
