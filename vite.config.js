import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/by-quill-and-sorcery-test/",
  plugins: [react()],
})
