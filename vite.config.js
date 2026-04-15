import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/anniv/",
  plugins: [react()],
  publicDir: 'assets',
  server: {
    fs: {
      strict: false
    }
  }
})