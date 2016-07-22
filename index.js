var fs = require('fs')

module.exports = {
  dirExistsSync: function (dirPath) {
    if (!dirPath) return false;

    try {
      return fs.statSync(dirPath).isDirectory();
    } catch (err) {
      if (err.code === 'ENOENT') {
        return false;
      }
      throw err;
    }
  },

  dirExists: function (dirPath, cb) {
    if (!dirPath) {
      cb(null, false);
      return;
    }

    fs.stat(dirPath, function (err, stats) {
      if (err) {
        if (err.code === 'ENOENT') {
          cb(null, false);
          return;
        }
        cb(err);
        return;
      }

      cb(null, stats.isDirectory());
    });
  }
};
