import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/hw3-meme-gen-vanilla/Meme!/",
  plugins: [react()]
});
