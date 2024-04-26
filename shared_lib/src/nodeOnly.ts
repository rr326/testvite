import fs from 'fs'

export function fnNodeOnly() {
  const retval = fs.existsSync('NonExistentFile.txt') ? 'File exists' : 'File does not exist'
  const text = `nodeOnly - ${retval}`
  console.log(text)
  return retval
}
