<?php

declare(strict_types=1);

namespace App\Providers;

use App\MoonShine\Resources\BannerResource;
use App\MoonShine\Resources\BlogResource;
use App\MoonShine\Resources\CallClientResource;
use App\MoonShine\Resources\CategoryResource;
use App\MoonShine\Resources\EmailClientResource;
use App\MoonShine\Resources\KitOrderResource;
use App\MoonShine\Resources\OrderResource;
use App\MoonShine\Resources\ProductResource;
use App\MoonShine\Resources\ReviewResource;
use App\MoonShine\Resources\SubCategoryResource;
use App\MoonShine\Resources\UserResource;
use App\MoonShine\Resources\VideoResource;
use App\MoonShine\Resources\WeekProductResource;
use MoonShine\Providers\MoonShineApplicationServiceProvider;
use MoonShine\Menu\MenuItem;
use MoonShine\Contracts\Resources\ResourceContract;
use MoonShine\Menu\MenuElement;
use MoonShine\Pages\Page;
use Closure;
use MoonShine\Menu\MenuGroup;

class MoonShineServiceProvider extends MoonShineApplicationServiceProvider
{

    public function register(): void
    {
        moonshine()->home(CategoryResource::class);
    }

    /**
     * @return list<ResourceContract>
     */
    protected function resources(): array
    {
        return [];
    }

    /**
     * @return list<Page>
     */
    protected function pages(): array
    {
        return [];
    }

    /**
     * @return Closure|list<MenuElement>
     */
    protected function menu(): array
    {
        return [
            // MenuGroup::make(static fn () => __('moonshine::ui.resource.system'), [
            //     MenuItem::make(
            //         static fn () => __('moonshine::ui.resource.admins_title'),
            //         new MoonShineUserResource()
            //     ),
            //     MenuItem::make(
            //         static fn () => __('moonshine::ui.resource.role_title'),
            //         new MoonShineUserRoleResource()
            //     ),
            // ]),

            MenuGroup::make('Продукты', [
                MenuItem::make('Категории', new CategoryResource()),
                MenuItem::make('Подкатегории', new SubCategoryResource()),
                MenuItem::make('Товары', new ProductResource()),
                MenuItem::make('Товары недели', new WeekProductResource()),
            ])->icon('heroicons.shopping-bag'),
            MenuGroup::make('Контент', [
                MenuItem::make('Видео', new VideoResource()),
                MenuItem::make('Отзывы о товарах', new ReviewResource()),
                MenuItem::make('Блоги', new BlogResource()),
                MenuItem::make('Пользователи', new UserResource()),
            ])->icon('heroicons.document-text'),
            MenuGroup::make('Маркетинг', [
                MenuItem::make('Баннеры', new BannerResource()),
                MenuItem::make('Email рассылка', new EmailClientResource()),
            ])->icon('heroicons.phone'),
            MenuGroup::make('Заказы', [
                MenuItem::make('Заказы', new OrderResource()),
                MenuItem::make('Заказы конструктора', new KitOrderResource()),
            ])->icon('heroicons.clipboard-document-list'),
            MenuGroup::make('Связь', [
                MenuItem::make('Обратная связь', new CallClientResource()),
            ])->icon('heroicons.chat-bubble-bottom-center-text'),
        ];
    }

    /**
     * @return Closure|array{css: string, colors: array, darkColors: array}
     */
    protected function theme(): array
    {
        return [];
    }
}
