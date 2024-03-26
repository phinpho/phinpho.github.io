import React from "@vitejs/plugin-react-swc";
import { type UserConfig, defineConfig } from "vite";
import VitePluginMetaEnv from "vite-plugin-meta-env";
import UnoCSS from "unocss/vite";

export default defineConfig(async ({ command, mode, isPreview }) => {
  const { version } = await import("./package.json");

    const isDev = () => command === "serve" || mode === "development";
  const isProd = () =>
    command === "build" && mode === "production" && !isPreview;

  const metaEnv = {
    VITE_APP_VERSION: isProd()
      ? version
      : isDev()
      ? `dev-${version}`
      : "unknown",
  };

  return {
    plugins: [VitePluginMetaEnv(metaEnv, "import.meta.env"), React(), UnoCSS()],
    server: {
      port: 8080,
    },
    build: {
      manifest: isProd() ? ".vite/manifest.json" : false,
      ssr: false,
      minify: isProd() ? "terser" : isDev() ? false : "esbuild",
      terserOptions: {
        keep_classnames: false,
      },
      sourcemap: isDev() ? "inline" : "hidden",
      chunkSizeWarningLimit: 40 * 1024,
      rollupOptions: {
        treeshake: {
          preset: "safest",
        },
        output: {
          compact: true,
        },
      },
    },
  } as UserConfig;
});