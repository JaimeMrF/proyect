const fs = require('fs');

// const first = fs.readFileSync("./data/first.txt", "utf-8");
// const second = fs.readFileSync("./data/second.txt", "utf-8");

// console.log(first);
// console.log(second);

// const title = 'hola';

// fs.writeFileSync("./data/fourth.txt", title, {
//     flag: 'a'
// });
 
fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
    if(error === null) {
        console.log(data)
    } else {
        console.log(error)
    }
})