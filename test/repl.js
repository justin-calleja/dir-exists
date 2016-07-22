var repl = require('repl');

var replServer = repl.start({
  prompt: '> '
});

replServer.context.dirExists = require('..').dirExists;
replServer.context.dirExistsSync = require('..').dirExistsSync;
