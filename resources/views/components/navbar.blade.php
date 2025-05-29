<nav class="flex justify-between h-16 items-center border-b border-gray-200 px-4 sticky top-0 bg-white z-10">
    <div class="flex items-center gap-4">
        <flux:brand wire:navigate href="/" logo="/logo.png" name="SoulsSpeedruns" />
        <flux:modal.trigger name="search-modal">
            <flux:input as="button" placeholder="Search..." icon="magnifying-glass" kbd="K" />
        </flux:modal.trigger>
    </div>
    <ul class="flex items-center gap-4 ml-auto">
        <flux:navbar>
            <s:nav:navbar>
                <flux:navbar.item :current="false" :href="$url" wire:navigate>{{ $title }}</flux:navbar.item>
            </s:nav:navbar>
        </flux:navbar>
    </ul>
    <flux:separator class="my-4 ml-4 mr-5" vertical />
    <div>
        @if (!$logged_in)
            <flux:button href="{{ route('statamic.cp.login') }}">Log in</flux:button>
        @else
            <flux:dropdown position="bottom" align="end">
                <flux:profile :avatar="$current_user['avatar']" :name="$current_user['name']" />

                <flux:navmenu>
                    <flux:navmenu.item href="{{ route('statamic.cp.account') }}" icon="user">Account</flux:navmenu.item>
                    <flux:navmenu.item href="{{ route('statamic.cp.logout', ['redirect' => url()->current() ]) }}" icon="arrow-right-start-on-rectangle">Logout</flux:navmenu.item>
                </flux:navmenu>
            </flux:dropdown>
        @endif
    </div>
</nav>
