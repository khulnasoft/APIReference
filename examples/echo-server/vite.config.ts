import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        // Resolve the uncompiled source code for all @scalar packages
        // @apireference/* -> packages/*/
        // (not @apireference/*/style.css)
        find: /^@scalar\/(?!(snippetz|components\/style\.css|components\b))(.+)/,
        replacement: path.resolve(__dirname, '../../packages/$2/src/index.ts'),
      },
    ],
  },
})
