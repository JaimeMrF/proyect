const path = require('path');



const filePath = path.join(__dirname, "module", "myModule.js");

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.parse(filePath));
console.log(path.resolve('dist'));
