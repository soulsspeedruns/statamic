<!doctype html>
<html lang="{{ $site->short_locale }}" class="scroll-pt-20 scroll-smooth">


<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $title ?? $site->name }}</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=inter:400,500,600&display=swap" rel="stylesheet" />
    @vite(['resources/js/site.js', 'resources/css/site.css'])
    @fluxAppearance
</head>

<body class="antialiased">
    @include('components.sidebar')
    <div class="ml-0 lg:ml-64 flex flex-col min-h-[calc(100vh-theme(spacing.16))]">
        @include('components.navbar')
        <div class="flex-grow">
            @yield('body')
        </div>
        @include('components.footer')
    </diva>
    @fluxScripts
</body>

</html>
