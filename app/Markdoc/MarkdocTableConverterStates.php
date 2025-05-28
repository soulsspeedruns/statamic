<?php

namespace App\Markdoc;

enum MarkdocTableConverterStates
{
    case START;
    case HEADER;
    case COLUMNS;
}
