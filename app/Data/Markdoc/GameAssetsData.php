<?php

namespace App\Data\Markdoc;

use Spatie\LaravelData\Data;

class GameAssetsData extends Data
{
    public function __construct(
        public string $background,
    ) {}
}
