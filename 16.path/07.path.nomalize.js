const path = require('path')
const fs = require('fs')
const filepath = __dirname +  ',/../15.fs.03.append/file/hello.txt'
// /path/to/frontend/nodejs/15.path/../15.fs/03.append/file/hello.txt

const normalizedFilePath = path.normalize(filepath)

console.log({filepath, normalizedFilePath})
const data = fs.readFileSync(normalizedFilePath)
console.log(data.toString())
