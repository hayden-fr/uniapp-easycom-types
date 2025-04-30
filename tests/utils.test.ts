import { expect, test } from 'vitest'
import { resolveCommentsJson } from '../src/core/utils'

test('test resolve json content', () => {
  const jsonWithoutComments = `{
    "a": 1,
    "b": 2
  }`
  expect(resolveCommentsJson(jsonWithoutComments)).toEqual({
    a: 1,
    b: 2,
  })

  const jsonWithComments = `{
    /** block comment a */
    "a": 1,
    /** block comment b */
    "b": 2 // line comment
  }
  `
  expect(resolveCommentsJson(jsonWithComments)).toEqual({
    a: 1,
    b: 2,
  })
})
