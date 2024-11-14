import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts(),
        viteStaticCopy({
            targets: [
                {
                    src: "src/index.css",
                    dest: "",
                },
            ],
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/components/index.tsx"),
            fileName: (format) => `index.${format}.js`,
            name: "design-system-whisperit",
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
});
