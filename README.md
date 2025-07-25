# uniapp-easycom-types

Generate the interface for uniapp easycom.

## Installation

```bash
npm install --save-dev uniapp-easycom-types
```

## Usage

Use the default configuration

```typescript
// vite.config.ts
import easycomTypes from 'uniapp-easycom-types'

export default defineConfig({
  plugins: [easycomTypes()],
})
```

or customize configuration

```typescript
// vite.config.ts
import easycomTypes from 'uniapp-easycom-types'

export default defineConfig({
  plugins: [
    easycomTypes({
      // Filepath to generate corresponding .d.ts file.
      // Defaults to './src/uniapp-easycom.d.ts'
      dts: './src/types/uniapp-easycom.d.ts',
    }),
  ],
})
```
