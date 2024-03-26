import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";
import presetTypography from "@unocss/preset-typography";
import transformerDirectives from "@unocss/transformer-directives";
import presetIcons from "@unocss/preset-icons/browser";
import { type IconifyJSON } from "@iconify/types";

export default defineConfig({
  content: {
    pipeline: {
      include: [
        // the default
        /\.([jt]sx|mdx?|html?)($|\?)/,
        "src/**/*.{js,ts,jsx,tsx,md,mdx}",
      ],
    },
  },
  presets: [
    presetUno({
      dark: "media",
    }),
    presetTypography(),
    presetIcons({
      collections: {
        "material-symbols": () =>
          import("@iconify-json/material-symbols/icons.json").then(
            (i) => i.default as IconifyJSON
          ),
        "grommet-icons": () =>
          import("@iconify-json/grommet-icons/icons.json").then(
            (i) => i.default as IconifyJSON
          ),
      },
    }),
  ],
  transformers: [transformerDirectives()],
});
