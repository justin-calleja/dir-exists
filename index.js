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
    if(!cb) {
      throw new Error('Missing callback(err, result) in dirExists. Nothing to handle result.');
    }
    if (!dirPath) {
      return cb(null, false);
    }

    fs.stat(dirPath, function (err, stats) {
      if (err) {
        if (err.code === 'ENOENT') {
          return cb(null, false);
        }
        return cb(err);
      }

      cb(null, stats.isDirectory());
    });
  }
};
