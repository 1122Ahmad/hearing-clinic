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
          // ❌ Remove or comment out the CSP headers — they break React Refresh
          // headers: {
          //   "Content-Security-Policy":
          //     "default-src 'self'; connect-src 'self' http://localhost:5000 ws://localhost:5173; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-eval';",
          // },
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
