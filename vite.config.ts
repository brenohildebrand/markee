import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: [
      { find: '@ui',        replacement: path.resolve(__dirname, 'src', 'ui')},
      { find: '@hooks',     replacement: path.resolve(__dirname, 'src', 'hooks')},
      { find: '@resources', replacement: path.resolve(__dirname, 'src', 'resources')},
      { find: '@assets',    replacement: path.resolve(__dirname, 'src', 'assets')}
    ],
  },
})
