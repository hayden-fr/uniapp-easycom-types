import { readFileSync } from 'node:fs'
import { relative } from 'node:path'

export const resolveCommentsJson = (content: string) => {
  const contentWithoutComments = content.replace(
    /\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g,
    (m, g) => (g ? '' : m),
  )
  return JSON.parse(contentWithoutComments)
}

export const requireJSON = (url: string) => {
  const content = readFileSync(url, 'utf-8')
  return resolveCommentsJson(content)
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

export const genRelativePath = (from: string, to: string) => {
  const relativePath = relative(from, to)
  return relativePath.startsWith('.') ? relativePath : `./${relativePath}`
}
