import { defineConfig } from "vite";
import flareforge from "@flareforge/dev/vite";

export default defineConfig({
  optimizeDeps: {
    include: [".flareforge/app/routes.ts", ".flareforge/app/routes/**/*"],
  },
  plugins: [flareforge()],
});
