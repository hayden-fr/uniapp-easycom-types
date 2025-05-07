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
import { EasyComTypes } from "uniapp-easycom-types";

export default defineConfig({
  plugins: [EasyComTypes()],
});
```

or customize configuration

```typescript
// vite.config.ts
import { EasyComTypes } from "uniapp-easycom-types";

export default defineConfig({
  plugins: [
    EasyComTypes({
      // Filepath to generate corresponding .d.ts file.
      // Defaults to './src/uniapp-easycom.d.ts'
      dts: "./src/uniapp-easycom.d.ts",
    }),
  ],
});
```
