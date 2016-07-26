[![NPM](https://nodei.co/npm/@justinc/dir-exists.png?downloads=true)](https://nodei.co/npm/@justinc/dir-exists/)

```js
var dirExists = require('@justinc/dir-exists').dirExists;
var dirExistsSync = require('@justinc/dir-exists').dirExistsSync;

console.log(dirExistsSync('/some/path/to/dir'));
console.log(dirExists('/some/path/to/dir'), (err, exists) => {
  if (err) throw err;
  console.log(exists);
});
```
