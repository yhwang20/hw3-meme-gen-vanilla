import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/hw3-meme-gen-vanilla/Meme!",
  plugins: [react()]
})
