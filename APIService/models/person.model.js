const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const PersonSchema = new Schema ({
    DUI: { 
        type: String, 
        trim:true,
        required: false,
        unique:true
    },
    nombre: { 
        type: String, 
        trim:true,
        required: false
    },
    fecha_nacimiento: { 
        type: String, 
        trim:true,
        required: false
    },
    nivel_educacion:{ 
        type: String, 
        trim:true,
        required: false
    },
    lectura: { 
        type: Boolean, 
        trim:true,
        required: false
    },
    escritura: { 
        type: Boolean, 
        trim:true,
        required: false
    },
    id_familia: { 
        type: Number, 
        trim:true,
        required: false
    },

},{timestamps:true});

module.exports = Mongoose.model("person",PersonSchema);