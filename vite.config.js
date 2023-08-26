// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    // This rule will explicitly tell Vite to handle .css files
    modules: {
      localsConvention: "camelCase",
    },
  },
});
