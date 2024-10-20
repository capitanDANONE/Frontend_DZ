import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
		sass: {
			api: 'modern-compiler', // or "modern", "legacy"
		},
    },
  },
  build: {
    sourcemap: true, // Ensure source maps are enabled
  },
})
