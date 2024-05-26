<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\Banner;

use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;
use MoonShine\Fields\Field;
use MoonShine\Components\MoonShineComponent;
use MoonShine\Enums\PageType;
use MoonShine\Fields\Image;

/**
 * @extends ModelResource<Banner>
 */
class BannerResource extends ModelResource
{
    protected string $model = Banner::class;

    protected string $title = 'Баннеры';

    protected bool $isAsync = true;

    protected int $itemsPerPage = 10;

    protected ?PageType $redirectAfterSave = PageType::INDEX;

    public function fields(): array
    {
        return [
            Block::make([
                ID::make()->sortable(),
                Image::make('Изображение', 'img')->removable(),
            ]),
        ];
    }

    public function rules(Model $item): array
    {
        return [
            'img' => ['required']
        ];
    }
}
