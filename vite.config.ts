import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import cesium from 'vite-plugin-cesium';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      cesium()
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: true // 项目启动时自动打开浏览器
  }
})
