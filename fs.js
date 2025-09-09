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
    if(error) {
        console.log(error)
    } else {
        console.log(data)
    }

    fs.readFile('./data/second.txt', 'utf-8', (error, data) => {
        if(error) {
        console.log(error)
    } else {
        console.log(data)
        }
    })

    fs.writeFile('./data/newfile.txt', 'archivo creado', (err, data)=> {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })
})  

