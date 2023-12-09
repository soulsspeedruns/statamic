import million from "million/compiler";
import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import autoImport from "unplugin-auto-import/vite";

export default defineConfig({
    plugins: [
        million.vite({ auto: true }),
        laravel({
            input: ["resources/js/client.jsx", "resources/css/app.css"],
            ssr: "resources/js/ssr.jsx",
            // Control Panel assets.
            // https://statamic.dev/extending/control-panel#adding-css-and-js-assets
            // 'resources/css/cp.css',
            // 'resources/js/cp.js',
            refresh: true,
        }),
        react(),
        autoImport({
            imports: ["react"],
            dts: "resources/js/auto-imports.d.ts",
        }),
    ],
});
