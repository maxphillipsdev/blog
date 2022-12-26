import ghost, { GhostContentAPIOptions } from "@tryghost/content-api";

const ghostClient = ghost({
  url: process.env.GHOST_API_URL || "http://localhost:8080",
  key: process.env.GHOST_API_KEY || "ghost-key",
  version: "v5.0",
});

export default ghostClient;
