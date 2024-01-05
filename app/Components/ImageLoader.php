<?php

namespace App\Components;

use Illuminate\Support\Facades\Storage;

class ImageLoader
{
    public function oneLoadImage($file, $path = null)
    {
        if($path) {
            $relativePath = substr($path, strlen('/storage'));
            if (Storage::disk('public')->exists($relativePath)) {
                Storage::disk('public')->delete($relativePath);
            }
        }
        $filePath = $file->store('uploads', 'public');
        $url = Storage::url($filePath);
        return $url;
    }

    public function manyLoadImage($files, $paths = null)
    {
        $urls = [];
        if($paths) {
            foreach (json_decode($paths) as $item) {
                $relativePath = substr($item, strlen('/storage'));
                if (Storage::disk('public')->exists($relativePath)) {
                    Storage::disk('public')->delete($relativePath);
                }
            }
        }
        foreach ($files as $file) {
            $filePath = $file->store('uploads', 'public');
            $url = Storage::url($filePath);
            array_push($urls, $url);
        }
        return json_encode($urls);
    }
}
