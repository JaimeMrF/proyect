const fs = require('fs');

const first = fs.readFileSync("./data/first.txt", "utf-8");

console.log(first);
 