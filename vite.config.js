import { defineConfig  } from "vite";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import vue from "@vitejs/plugin-vue";
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env.local") });
console.log("log du process",process.env.VITE_SENTRY_AUTH_TOKEN)

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
      vue(),
    sentryVitePlugin({
      org: "w3-frame",
      project: "sentry-course",
      // Specify the directory containing build artifacts
      include: "./dist",
      // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
      // and needs the `project:releases` and `org:read` scopes
      authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
    }),
  ],
});
