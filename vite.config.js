import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import autoImport from "unplugin-auto-import/vite";
import path from "node:path";

export default defineConfig({
    plugins: [
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
    resolve: {
        alias: {
            "ziggy-js": path.resolve("vendor/tightenco/ziggy"),
            // 'vendor/tightenco/ziggy/dist/vue.es.js' if using the Vue plugin
        },
    },
});
