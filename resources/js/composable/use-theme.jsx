import { usePage } from "@inertiajs/react";

export function useTheme() {
    const theme = usePage().props.theme;
}