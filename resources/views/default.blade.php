@extends('layout')

@section('body')
<main class="container max-w-[1200px] mx-auto px-4 py-4">
    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 lg:col-span-9">
            <ul class="mb-4">
                @include('components.breadcrumbs')
            </ul>
            <h1 class="text-4xl font-bold">{{ $title }}</h1>
            <div class="prose max-w-none [&_.table-of-contents]:hidden [&_.heading-permalink]:mr-2">
                {!! $content !!}
            </div>
        </div>
        <aside class="col-span-3 hidden lg:block">
            <div class="sticky top-20">
                <p class="font-bold">On This Page</p>
                <div
                    class="overflow-hidden [&>:not(.table-of-contents)]:hidden [&>ul>li>ul]:ml-4 [&_li]:whitespace-nowrap [&_li]:overflow-ellipsis">
                    {!! $content !!}
                </div>
                <div>
                    <flux:button href="{{ $page->editUrl }}">
                        Edit this page
                    </flux:button>
                </div>
            </div>
        </aside>
    </div>
</main>
@endsection
