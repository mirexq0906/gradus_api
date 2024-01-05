<?php

namespace App\Http\Controllers;

use App\Components\DataProcessor;
use App\Components\ImageLoader;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    protected $imageLoader;
    protected $dataProcessor;

    function __construct(ImageLoader $imageLoader, DataProcessor $dataProcessor)
    {
        $this->imageLoader = $imageLoader;
        $this->dataProcessor = $dataProcessor;
    }
}
