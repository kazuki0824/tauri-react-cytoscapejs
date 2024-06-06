import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

export default defineConfig({
  build: {
    outDir: "./dist",
  },
  server: {
    port: 8000,
  },
  plugins: [tailwind()],
});
