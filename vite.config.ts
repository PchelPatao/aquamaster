import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/pchelpatao-aquamaster-cd89.twc1.net/',
  plugins: [react(), tailwindcss()],
})
