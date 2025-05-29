@extends('layout')

@section('body')
<div class="container max-w-[1200px] mx-auto px-4 py-20 flex flex-col justify-center items-center gap-4">
    <h1 class="text-4xl font-bold">Page not found</h1>
    <flux:text>Sorry, we couldn't find the page you're looking for.</flux:text>
    <div class="flex gap-2 items-center">
        <flux:button href="/" wire:navigate variant="primary">Go back home</flux:button>
        <flux:button target="_blank" href="https://github.com/SoulsSpeedruns/statamic" variant="ghost" icon:trailing="arrow-right">Contact support</flux:button>
    </div>
</div>
@endsection
