<?php

namespace App\Markdoc;

class MarkdocConverter
{
    public static function convert(string $markdown): string
    {
        $converted = MarkdocTableConverter::convert($markdown);

        return MarkdocYoutuberConverter::convert($converted);
    }
}
