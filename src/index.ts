import type { Plugin } from 'vite'
import type { CustomConfig } from './core/ctx'
import { createContext } from './core/ctx'

export type EasycomOptions = CustomConfig

const pluginEasycom = (opts: EasycomOptions = {}): Plugin => {
  const ctx = createContext(opts)

  return {
    name: 'uniapp-easycom-types',
    configResolved(config) {
      ctx.init(config.root)
    },
    async buildStart() {
      ctx.scanEasyComponents()
      ctx.generateTypeDeclarations()
    },
  }
}

export default pluginEasycom
