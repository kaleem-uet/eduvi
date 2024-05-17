import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'




export default defineConfig({
  alias: {
    '@': '/src'
  },
  plugins: [
      react(),
],
})
