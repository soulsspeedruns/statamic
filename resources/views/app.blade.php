<?php
$theme = session('theme', 'system');
?>

<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class([
    'scroll-pt-16',
    'dark' => $theme == 'dark',
    'light' => $theme == 'light',
])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/client.jsx', 'resources/css/app.css', "resources/js/pages/{$page['component']}.jsx"])
    @inertiaHead

    @if ($theme == 'system')
        <script>
            ;(() => {
                const theme = window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light';

                document.documentElement.classList.add(theme)
            })();
        </script>
    @endif
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
