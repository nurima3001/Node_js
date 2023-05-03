const read = require('../02.read-file-syn').read
const read = require('../01.write-file-sync').write

function append(file, data) {
    const oldData = read(file)
    write(file, oldData + data)
}

append('file/hello.txt', 'Hello from Node.js')