import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: `https://${process.env.VERCEL_URL}` || "http://localhost:3000",
  integrations: [
    mdx(),
    sitemap(),
    react(),
    tailwind(),
    partytown(),
    prefetch(),
  ],
  output: "static",
  adapter: vercel({
    analytics: true,
  }),
});
