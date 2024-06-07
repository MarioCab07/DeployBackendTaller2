const Person = require("../models/person.model");

const controller = {};

controller.add = async(req,res,next)=>{
    try {
        const {DUI,nombre,fecha_nacimiento,nivel_educacion,lectura,escritura,id_familia} = req.body;

        const person = new Person({
            DUI:DUI,
            nombre:nombre,
            fecha_nacimiento:fecha_nacimiento,
            nivel_educacion:nivel_educacion,
            lectura:lectura,
            escritura:escritura,
            id_familia:id_familia
        });

        const personSaved = await person.save();

        if(!personSaved){
            return res.status(409).json({error:"Error saving person"});
        }

        return res.status(201).json({"result":"Family saved"});

    } catch (error) {
        console.error(error);
        return res.status(500).json({error:"Internal Server Error"});
    }
}

controller.delete = async(req,res,next)=>{
    try {
        const{identifier}=req.params;

        const person = await Person.findOneAndDelete({DUI:identifier});

        if(!person){
            return res.status(404).json({message:"Person not found"})
        }

        return res.status(200).json({message:"Person deleted"})

    } catch (error) {
        console.error(error);
        return res.status(500).json({error:"Internal Server Error"});
    }
}

controller.findPersonByFamily = async(req,res,next)=>{
    try {
        
        const {identifier}=req.params;

        const persons = await Person.find({id_familia:identifier})

        return res.status(200).json({persons})

    } catch (error) {
        console.error(error);
        return res.status(500).json({error:"Internal Server Error"});
    }
}

module.exports = controller;