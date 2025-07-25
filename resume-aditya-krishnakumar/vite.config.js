import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Resume-Aditya-Krishnakumar/resume-aditya-krishnakumar/',
  plugins: [react(), tailwindcss()],
})
