const foo = [
  'aa',
  'vvvv',
  'ccc',
  'dd',
  'ee'
]

const bar = [
  'aa',
  'vvvv',
  'ccc',
  'd',
  'eedddddd'
]

function hasDuplicateLengths(arr) {
  const lengths = []
  return arr.some(el => {
    if (lengths.includes(el.length)) {
      return true
    } else {
      lengths.push(el.length)
      return false
    }
  })
}