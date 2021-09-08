const path = require('path');

//console.log(path.basename('C:\\temp\\myfile.html'));

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux'))


console.log(path.dirname('/foo/bar/baz/asdf/quux'));


//The path.resolve() method resolves a sequence of paths or path segments into an absolute path.

// console.log(path.resolve(__dirname));
// console.log(__dirname)
// console.log(__filename)
// /home/divya/workspace/stuff/nodejs/inclass/introToNodejs
// /home/divya/workspace/stuff/nodejs/inclass/introToNodejs/a.path.js
// E:\MERN\NodeJS_Class
// E:\MERN\NodeJS_Class\Test.js


// console.log(path.resolve(__dirname,'Test.js'));

// E:\MERN\NodeJS_Class\Test.js