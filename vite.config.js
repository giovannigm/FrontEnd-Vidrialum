import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite acceder desde otros dispositivos en la red
    port: 5173, // Puerto predeterminado de Vite (puedes cambiarlo)
  },
});
