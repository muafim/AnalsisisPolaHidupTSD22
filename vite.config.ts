import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/AnalsisisPolaHidupTSD22/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("recharts") || id.includes("d3-") || id.includes("victory-vendor")) return "charts";
          if (id.includes("react") || id.includes("scheduler")) return "react-vendor";
          if (id.includes("lucide-react")) return "icons";
        },
      },
    },
  },
});
