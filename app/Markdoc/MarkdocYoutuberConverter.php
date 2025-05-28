<?php

namespace App\Markdoc;

use Illuminate\Support\Str;

class MarkdocYoutuberConverter
{
    public static function convert(string $markdoc): string
    {
        return Str::of($markdoc)
            ->explode("\n")
            ->map(function ($line) {
                if (! Str::startsWith($line, '{% youtube')) {
                    return $line;
                }

                return Str::of($line)
                    ->match('{% youtube src="(.+)" \/%}')
                    ->toString();
            })
            ->join("\n");
    }
}
