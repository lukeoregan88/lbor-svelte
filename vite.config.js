/** @format */

import { sveltekit } from "@sveltejs/kit/vite";
import { imagetools } from "vite-imagetools";

const config = {
  plugins: [sveltekit(), imagetools()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/variables.scss" as *;',
      },
    },
  },
};

export default config;
