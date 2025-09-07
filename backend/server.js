require("dotenv").config();


const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.use("/", (req, res)=> {
    res.sendFile("../frontend/main.html");
})


app.listen(PORT, ()=>{
    console.log(`Server en el puerto ${PORT}`)
});