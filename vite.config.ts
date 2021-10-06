import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import htmlPlugin from 'vite-plugin-htmls'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), htmlPlugin({
    input: './src/main.tsx'
  })]
})
