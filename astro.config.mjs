import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: node({
        mode: "standalone",
        port: 3000
    }),
    image: {
        domains: ["shopify.com"]
    },
    integrations: [
        tailwind({
            applyBaseStyles: false
        }),
        react()
    ]
});
