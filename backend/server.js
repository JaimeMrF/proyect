require("dotenv").config();

const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT;


app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
    res.sendFile("main.html", {root: path.join(__dirname, "../frontend")});
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
