import uni from '@dcloudio/vite-plugin-uni'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    uni(),
    autoImport({
      imports: ['vue', 'pinia', 'uni-app'],
      dts: 'src/types/auto-imports.d.ts',
    }),
  ],
})
