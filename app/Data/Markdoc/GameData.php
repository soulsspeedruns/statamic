<?php

namespace App\Data\Markdoc;

use Spatie\LaravelData\Data;

class GameData extends Data
{
    public function __construct(
        public string $name,
        public GameAssetsData $assets
    ) {}
}
