<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\EmailClient;

use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;
use MoonShine\Fields\Field;
use MoonShine\Components\MoonShineComponent;
use MoonShine\Fields\Text;

/**
 * @extends ModelResource<EmailClient>
 */
class EmailClientResource extends ModelResource
{
    protected string $model = EmailClient::class;

    protected string $title = 'Email рассылка';

    protected bool $isAsync = true;

    protected int $itemsPerPage = 10;

    public function search(): array
    {
        return ['id', 'email'];
    }

    public function fields(): array
    {
        return [
            Block::make([
                ID::make()->sortable(),
                Text::make('email')
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
