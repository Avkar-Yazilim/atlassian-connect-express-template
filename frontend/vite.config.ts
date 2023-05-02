import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        "process.env": "({})",
        global: "({})",
    },
    build: {
        lib: {
            entry: resolve(__dirname, "src/App.tsx"),
            name: "my-lib",
            fileName: "my-lib",
            formats: ["es"],
        },
        outDir: "../backend/public/js",
        emptyOutDir: false,
        watch: {},
        minify: true,
    },
    plugins: [react()],
});
