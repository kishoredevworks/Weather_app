import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    middleware: [
      (req, res, next) => {
        if (req.url.endsWith('.jsx')) {
          res.setHeader('Content-Type', 'text/jsx')
        }
        next()
      }
    ]
  }
})