import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const isDev = command === "serve";

  return {
    plugins: [react()],
    server: isDev
      ? {
          // Dev-only header to allow eval-based dev tools (HMR / some source maps).
          // Remove or disable this for any remote/dev preview that should enforce strict CSP.
          headers: {
            "Content-Security-Policy":
              "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
          },
        }
      : undefined,
    build: {
      // Avoid generating eval-style sourcemaps in production bundles
      sourcemap: false,
      // Optional: further minimize any dev-only helpers that could use eval
      rollupOptions: {
        output: {
          // keep code splitting / names predictable
        },
      },
    },
    esbuild: {
      // Keep esbuild from emitting eval-heavy constructs for production builds
      // No config required here for typical apps, left for clarity
    },
  };
});