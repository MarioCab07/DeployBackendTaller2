const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const FamilySchema =  new Schema ({
    nombre:{
        type:String,
        required:true,
        unique:true,
    },

    canton:{
        type:String,
        trim :true,
        required:true,
    },

    tipoVivienda:{
        type:String,
        trim:true,
        required:true
    },

    nivelRiesgo:{

        type:String,
        trim:true,
        required:true
    },
    idFamilia:{
        type:Number,
        trim:true,
        required:true,
        unique:true,
    },
    latitud:{
        type:Number,
        trim:true,
    },
    longitud:{
        type:Number,
        trim:true
    }
    
})

module.exports = Mongoose.model("family",FamilySchema)