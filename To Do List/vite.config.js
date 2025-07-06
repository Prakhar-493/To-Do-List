import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { RouterProvider } from 'react-router'
import { Router } from 'react-router'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
