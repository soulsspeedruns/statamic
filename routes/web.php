<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Statamic\Facades\Entry;

Route::post('/theme', function (Request $request) {
    $validated = $request->validate([
        'theme' => "in:dark,light,system",
    ]);

    session($validated);
});

Route::fallback(function (Request $request) {
    $path = $request->path();
    $page = Entry::findByUri(str_starts_with($path, "/") ? $path : "/$path");

    if (!$page) {
        return abort(404);
    }

    function mapper($page) {
        $only = collect($page)->only(['id', 'title', 'uri', 'children']);

        if ($only['children']) {
            $only['children'] = collect($only['children'])->map(fn ($item) => mapper($item));
        }

        return $only;
    }

    $navigation = collect(Statamic::tag('nav:collection:pages'))
        ->map(fn ($page) => mapper($page));

    return Inertia::render('hello', [
        'page' => [
            'title' => $page['title'],
            'content' => $page['content'],
        ],
        'navigation' => $navigation,
    ]);
});