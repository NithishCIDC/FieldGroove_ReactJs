import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['jquery', 'datatables.net-bs5']
  },
  plugins: [react()],
})
