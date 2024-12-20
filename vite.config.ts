import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/Frontend_DZ/',
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
