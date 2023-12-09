import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ defaultTheme, children }) {
    return (
        <NextUIProvider>
            <NextThemesProvider
                attribute="class"
                defaultTheme={defaultTheme}
                enableSystem
            >
                {children}
            </NextThemesProvider>
        </NextUIProvider>
    );
}
