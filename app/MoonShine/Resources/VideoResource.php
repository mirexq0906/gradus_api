<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\Video;

use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;
use MoonShine\Fields\Text;
use MoonShine\Fields\Image;
use MoonShine\Fields\Slug;
use MoonShine\Enums\PageType;
use MoonShine\Fields\Relationships\BelongsTo;
use Illuminate\Contracts\Database\Eloquent\Builder;
use MoonShine\Fields\Switcher;

/**
 * @extends ModelResource<Video>
 */
class VideoResource extends ModelResource
{
    protected string $model = Video::class;

    protected string $title = 'Видео';

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
                Text::make('Название видео', 'name'),
                Slug::make('Slug', 'url')->from('name')->unique(),
                Image::make('Изображение', 'img')->removable(),
                BelongsTo::make('Название категории', 'category', 'name', new CategoryResource())
                    ->searchable()
                    ->valuesQuery(fn (Builder $query) => $query->limit(10))
            ]),
        ];
    }

    public function filters(): array
    {
        return [
            Text::make('Название видео', 'name')->placeholder('Введите название'),
            Text::make('Slug', 'url')->placeholder('Введите slug'),
            Switcher::make('Показать удаленные')->onApply(function (Builder $query, $value) {
                if ($value) {
                    return $query->onlyTrashed();
                } else {
                    return $query;
                }
            })
        ];
    }


    public function rules(Model $item): array
    {
        return [
            'name' => ['required', 'string', 'unique:App\Models\Video']
        ];
    }
}
