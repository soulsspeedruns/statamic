<?php

namespace App\Markdoc;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;

use function count;

class MarkdocTableConverter
{
    /**
     * Replaces Markdoc tables with Markdown tables
     */
    public static function convert(string $markdoc): string
    {
        /**
         * Note: this implementation is very naive and assumes valid markdoc tables.
         * However, this is meant to be converted valid markdoc from the old website
         * so this is good enough
         */
        if (! Str::contains($markdoc, ['{% table %}', '{% /table %}'])) {
            return $markdoc;
        }

        $lines = Str::of($markdoc)->explode("\n");
        $start = 0;
        $end = count($lines) - 1;
        $headers = [];
        $currentColumn = 0;
        $columns = [];
        $state = MarkdocTableConverterStates::START;

        foreach ($lines as $index => $line) {
            if ($line === '') {
                continue;
            }

            if (Str::startsWith($line, '{% /table %}')) {
                $end = $index;
                break;
            }

            if ($state === MarkdocTableConverterStates::START) {
                if (Str::startsWith($line, '{% table %}')) {
                    $start = $index;
                    $state = MarkdocTableConverterStates::HEADER;

                    continue;
                }
            }

            if ($state === MarkdocTableConverterStates::HEADER) {
                if (Str::startsWith($line, '- ')) {
                    $headers[] = Str::replaceStart('- ', '', $line);

                    continue;
                }

                if ($line === '---') {
                    $state = MarkdocTableConverterStates::COLUMNS;

                    continue;
                }
            }

            if ($state === MarkdocTableConverterStates::COLUMNS) {
                if (Str::startsWith($line, '- ')) {
                    $columns[$currentColumn][] = Str::replaceStart('- ', '', $line);

                    continue;
                }

                if ($line === '---') {
                    $currentColumn++;

                    continue;
                }
            }
        }

        $output[] = '| '.Arr::join($headers, ' | ').' |';
        $output[] = '| '.Arr::join(Arr::map($headers, fn () => '---'), ' | ').' |';

        foreach ($columns as $column) {
            $output[] = '| '.Arr::join($column, ' | ').' |';
        }

        $replaced = [
            ...$lines->slice(0, $start),
            ...$output,
            ...$lines->slice($end + 1, count($lines)),
        ];

        $string = Arr::join($replaced, "\n");

        return self::convert($string);
    }
}
