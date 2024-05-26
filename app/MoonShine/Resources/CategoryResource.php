<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\MoonShine\Traits\ButtonOrderTrait;
use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;
use MoonShine\Fields\Slug;
use MoonShine\Fields\Text;
use Illuminate\Contracts\Database\Eloquent\Builder;
use MoonShine\ActionButtons\ActionButton;
use MoonShine\Enums\PageType;
use MoonShine\Fields\Switcher;
use MoonShine\MoonShineUI;

/**
 * @extends ModelResource<Category>
 */
class CategoryResource extends ModelResource
{
    use ButtonOrderTrait;
    protected string $model = Category::class;

    protected string $title = 'Категории';

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
                Text::make('Название категории', 'name'),
                Slug::make('Slug', 'url')->from('name')->unique()
            ]),
        ];
    }

    public function rules(Model $item): array
    {
        return [
            'name' => ['required', 'string', 'unique:App\Models\Category']
        ];
    }

    public function validationMessages(): array
    {
        return [
            'name.unique' => 'Название категории должно быть уникальным'
        ];
    }

    public function filters(): array
    {
        return [
            Text::make('Название категории', 'name')->placeholder('Введите название'),
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

    public function getActiveActions(): array
    {
        return ['create', 'view', 'update', 'massDelete'];
    }

    public function buttons(): array
    {
        return [
            ActionButton::make('')
                ->icon('heroicons.outline.trash')
                ->error()
                ->inModal(
                    title: fn () => 'Подтверждение',
                    content: fn () => 'Вы уверены, что хотите удалить запись ?',
                    buttons: [
                        ActionButton::make('Удалить')->error()->async(events: ['table-updated-index-table'])->method('deleteRecord')
                    ],
                    async: false
                ),
        ];
    }

    public function deleteRecord()
    {
        $category = $this->getItem();
        $subCategories = $category->subCategories;
        $blogs = $category->blogs;
        $videos = $category->videos;

        if (!empty($subCategories)) {
            MoonShineUI::toast('Есть связанные подкатегории', 'error');
        } elseif (!empty($blogs)) {
            MoonShineUI::toast('Есть связанные блоги', 'error');
        } elseif (!empty($videos)) {
            MoonShineUI::toast('Есть связанные видео', 'error');
        } else {
            $category->delete();
            MoonShineUI::toast('Удалено', 'success');
        };
    }
}
