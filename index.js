var fs = require('fs')

module.exports = function (dirPath) {
  if (!dirPath) return false

  try {
    return fs.statSync(dirPath).isDirectory()
  } catch (e) {
    return false
  }
}
