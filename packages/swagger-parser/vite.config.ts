import path from 'path'
import { defineConfig } from 'vitest/config'

import pkg from './package.json'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: '@apireference/swagger-parser',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      /**
       * Make sure to also externalize any dependencies that you do not want to bundle into your library
       */
      external: [
        'vue',
        ...Object.keys(pkg.dependencies || {}).filter(
          (item) => !item.startsWith('@scalar'),
        ),
      ],
    },
  },
  resolve: {
    alias: [
      // Resolve the uncompiled source code for all @scalar packages
      // It’s working with the alias, too. It’s just required to enable HMR.
      {
        // Resolve the uncompiled source code for all @scalar packages
        // @apireference/* -> packages/*/
        // (not @apireference/*/style.css)
        find: /^@scalar\/(?!(snippetz|components\/style\.css|components\b))(.+)/,
        replacement: path.resolve(__dirname, '../$2/src/index.ts'),
      },
    ],
  },
  test: {
    coverage: {
      enabled: true,
      reporter: 'text',
    },
  },
})
