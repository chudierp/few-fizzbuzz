const fb = require('../fizzbuzz')

test('isFizzy', () => {
  expect(fb.isFizzy(3)).toBe(true)
  expect(fb.isFizzy(4)).toBe(false)
  expect(fb.isFizzy(5)).toBe(false)
  expect(fb.isFizzy(6)).toBe(true)
})

test('isBuzzy', () => {
  expect(fb.isBuzzy(3)).toBe(false)
  expect(fb.isBuzzy(4)).toBe(false)
  expect(fb.isBuzzy(5)).toBe(true)
  expect(fb.isBuzzy(6)).toBe(false)
})

test('fizzyBuzzy', () => {
  expect(fb.fizzyBuzzy(3)).toBe('fizz')
  expect(fb.fizzyBuzzy(4)).toBe('')
  expect(fb.fizzyBuzzy(5)).toBe('buzz')
  expect(fb.fizzyBuzzy(30)).toBe('fizzbuzz')
})

test('fizzBuzz', () => {
  expect(fb.fizzBuzz(30)).toStrictEqual({buzz: 4, count: 30, fizz: 8, fizzBuzz: 2})
  expect(fb.fizzBuzz(5)).toStrictEqual({buzz: 1, count: 5, fizz: 1, fizzBuzz: 0})
  expect(fb.fizzBuzz(18)).toStrictEqual({buzz: 2, count: 18, fizz: 5, fizzBuzz: 1})
  expect(fb.fizzBuzz(3)).toStrictEqual({buzz: 0, count: 3, fizz: 1, fizzBuzz: 0})
})