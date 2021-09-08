const fs = require('fs')

function readFile (filename) {
  if (fs.existsSync(filename)) {
    return fs.readFileSync(filename, 'utf8')
  }
  throw new Error('Cannot find file ' + filename)
}


console.log(readFile("/home/divya/workspace/stuff/nodejs/testcase/samplefile.txt"))

module.exports = {
  readFile: readFile,
}