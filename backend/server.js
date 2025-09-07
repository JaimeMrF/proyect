require("dotenv").config();
const cors = require("cors");
const path = require("path");
const express = require("express");
const mongoose  = require("mongoose");
const router = require(path.join(__dirname, "/routes/tareas.js"));
const app = express();
const PORT = process.env.PORT;

app.use(cors({
  origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

mongoose.connect(process.env.MONGO_URI)
    .then(console.log("DB conectada"))
    .catch(err => console.log(err))

app.use("/tareas", router);

app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
    res.sendFile("main.html", {root: path.join(__dirname, "../frontend")});
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

