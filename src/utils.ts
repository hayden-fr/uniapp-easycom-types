import { readFileSync } from 'node:fs'

export const requireJson = <T = any>(
  filename: string,
  defaultValue: T,
): T | undefined => {
  try {
    const content = readFileSync(filename, 'utf-8')
    const contentWithoutComments = content.replace(
      /\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g,
      (m, g) => (g ? '' : m),
    )
    return JSON.parse(contentWithoutComments)
  } catch (error) {
    return defaultValue
  }
}

export const pascalCase = (str: string) => {
  if (!str || typeof str !== 'string') return ''

  const words = str
    .replace(/[-_]/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')

  const pascalCase = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')

  return pascalCase
}
