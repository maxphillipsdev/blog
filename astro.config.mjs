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
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: process.env.VERCEL
    ? "https://www.maxphillips.dev"
    : "http://localhost:3000",
  integrations: [
    mdx(),
    sitemap(),
    react(),
    tailwind(),
    partytown(),
    prefetch(),
  ],
  output: "server",
  adapter: vercel({
    analytics: true,
  }),
});
