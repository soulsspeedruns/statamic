<?php

namespace App\Data\Markdoc;

use Spatie\LaravelData\Data;

class PageData extends Data
{
    public function __construct(
        public string $title,
    ) {}
}
