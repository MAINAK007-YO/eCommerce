import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "about.html"),
                contacts: resolve(__dirname, "contacts.html"),
                products: resolve(__dirname, "products.html"),
                addToCart: resolve(__dirname, "addToCart.html"),
            },
        },
    },
});