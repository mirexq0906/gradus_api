<?php

namespace App\MoonShine\Traits;

trait ButtonOrderTrait
{
    public function getIndexItemButtons(): array
    {
        return [
            $this->getDetailButton(),
            $this->getEditButton(),
            $this->getDeleteButton(),
            $this->getMassDeleteButton(),
            ...$this->getIndexButtons(),
        ];
    }

    public function getDetailItemButtons(): array
    {
        return [
            $this->getEditButton(),
            ...$this->getIndexButtons(),
        ];
    }

    public function getFormItemButtons(): array
    {
        return [
            $this->getEditButton(),
            ...$this->getIndexButtons(),
        ];
    }
}
