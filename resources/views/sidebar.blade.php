<aside>
    <flux:navlist class="w-64 hidden lg:block fixed left-0 top-0 bottom-0 bg-white border-r border-r-gray-200 py-4 px-2">
        <s:nav:sidebar>
            <flux:navlist.item wire:navigate :href="$url">{{ $title }}</flux:navlist.item>
            @if ($children)
                <flux:navlist.group class="[&>button]:hidden" heading="lmao" expandable>
                    @foreach ($children as $child)
                        <flux:navlist.item wire:navigate :href="$child['url']">{{ $child['title'] }}</flux:navlist.item>
                    @endforeach
                </flux:navlist.group>
            @endif
        </s:nav:sidebar>
    </flux:navlist>
</aside>
