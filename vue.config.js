import { defineConfig } from "vite";

// config global scss files
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // example : additionalData: `@import "./src/design/styles/variables";`
          // dont need include file extend .scss
          additionalData: `
            @import "@/assets/styles/core/_functions.scss";
          `,
          // additionalData: `@use "~/assets/styles/core/_functions.scss" as *";`,
        },
      },
    },
  },
  css: ["~/assets/styles/main.scss"],
});
