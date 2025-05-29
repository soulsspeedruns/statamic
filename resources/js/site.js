// Fix for: https://github.com/livewire/livewire/discussions/8786
document.addEventListener('livewire:navigate', (event) => {
    /** @type{URL} */
    const to = event.detail.url
    const here = new URL(window.location.href)

    if (to.origin !== here.origin) {
        event.preventDefault()
        window.location.assign(to);
    }
})

