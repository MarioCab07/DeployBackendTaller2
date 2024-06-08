const Person = require("../models/person.model");

const controller = {};

controller.add = async(req,res,next)=>{
    try {
        const {DUI,nombre,fecha_nacimiento,nivel_educacion,lectura,escritura,idfamilia} = req.body;


        const _person = await Person.findOne({ DUI: DUI });
        
        if(_person){
            return res.status(409).json({message:_person});

        }

        const person = new Person({
            DUI:DUI,
            nombre:nombre,
            fecha_nacimiento:fecha_nacimiento,
            nivel_educacion:nivel_educacion,
            lectura:lectura,
            escritura:escritura,
            idfamilia:idfamilia
        });

        const personSaved = await person.save();

        if(!personSaved){
            return res.status(409).json({message:"Error saving person"});
        }

        return res.status(201).json({"result":"Person saved"});

    } catch (error) {
        console.error(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

controller.delete = async(req,res,next)=>{
    try {
        const{identifier}=req.params;

        const person = await Person.findOneAndDelete({DUI:identifier});

        if(!person){
            return res.status(404).json({message:"Person not found"})
        }

        return res.status(200).json({"result":"Person deleted"})

    } catch (error) {
        console.error(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

controller.findPersonByFamily = async(req,res,next)=>{
    try {
        
        const {identifier}=req.params;

        const persons = await Person.find({idfamilia:identifier})

        return res.status(200).json({persons})

    } catch (error) {
        console.error(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}


controller.findAllPerson = async(req,res,next)=>{
    try {

        const persons = await Person.find();

        if(!persons){
            return res.status(404).json({"message":"People not found"})
        }

        return res.status(200).json({persons})

    } catch (error) {
        console.error(error);
        return res.status(500).json({message:"Internal Server Error"});

    }
}

module.exports = controller;