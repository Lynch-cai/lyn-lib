import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import dts from "vite-plugin-dts";
// import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// Config for storybook
export default defineConfig({
    plugins: [
        vue(),
        dts({
            insertTypesEntry: true,
        }),
        // cssInjectedByJsPlugin(),
    ],
    build: {
        cssCodeSplit: true,
        lib: {
            entry: "src/components/index.ts",
            name: "lyn",
            formats: ["es", "cjs", "umd"],
            fileName: (format) => `lyn.${format}.js`,
        },
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "src/components/main.ts"),
            },
            external: ["vue"],
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === "main.css") return "lyn.css";
                    return assetInfo.name;
                },
                exports: "named",
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    css: {
        preprocessorOptions: {
            stylus: {
                additionalData: `@import "${path.resolve(__dirname, "src/assets/styles/all.styl")}"`,
            },
        },
    },
});
