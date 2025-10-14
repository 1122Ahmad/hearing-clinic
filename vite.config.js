import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const isDev = command === "serve";

  return {
    plugins: [react()],
    server: isDev
      ? {
          proxy: {
            "/api": {
              target: "http://localhost:5000",
              changeOrigin: true,
              secure: false,
            },
          },
          headers: {
            // Remove or loosen CSP during local development
            "Content-Security-Policy":
              "default-src 'self'; connect-src 'self' http://localhost:5000 ws://localhost:5173; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-eval';",
          },
        }
      : undefined,
    build: {
      sourcemap: false,
      rollupOptions: {
        output: {},
      },
    },
  };
});
