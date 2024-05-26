<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\Blog;
use Illuminate\Contracts\Database\Eloquent\Builder;
use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;
use MoonShine\Fields\Field;
use MoonShine\Components\MoonShineComponent;
use MoonShine\Enums\PageType;
use MoonShine\Fields\Slug;
use MoonShine\Fields\Text;
use MoonShine\Fields\Image;
use MoonShine\Fields\Number;
use MoonShine\Fields\Relationships\BelongsTo;
use MoonShine\Fields\Switcher;

/**
 * @extends ModelResource<Blog>
 */
class BlogResource extends ModelResource
{
    protected string $model = Blog::class;

    protected string $title = 'Блоги';

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
                Text::make('Название блога', 'name'),
                Slug::make('Slug', 'url'),
                Text::make('Описание краткое блога', 'desc')->hideOnIndex(),
                Text::make('Подробное описание блога', 'detailed')->hideOnIndex(),
                Image::make('Изображение', 'img')->removable(),
                Number::make('Количество просмотров', 'views')->hideOnUpdate()->hideOnForm(),
                BelongsTo::make('Название категории', 'category', 'name', new CategoryResource())
                    ->searchable()
                    ->valuesQuery(fn (Builder $query) => $query->limit(10))
            ]),
        ];
    }

    public function filters(): array
    {
        return [
            Text::make('Название блога', 'name')->placeholder('Введите название'),
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
            'name' => ['required', 'string'],
            'desc' => ['required', 'string'],
            'detailed' => ['required', 'string'],
        ];
    }
}
