const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.write(`estás en ${req.url}`, 'utf-8');
    res.end();
}).listen(3000);

console.log("Servidor en el puerto 3000")