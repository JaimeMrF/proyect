const mongoose = require("mongoose");

const TareaSchema = mongoose.Schema({
    titulo:{
        type : String,
        required : true
    },

    completada:{
        type : Boolean,
        default : false,
    },

    tiempoInicio:{
        type:Date,
        default:Date.now
    }
})

const Tarea = mongoose.model("Tarea", TareaSchema);
module.exports = Tarea;