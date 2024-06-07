const Family = require("../models/family.model");

const controller={};

controller.add = async(req,res,next)=>{
    try {
        const {nombre,canton,nivelRiesgo,tipoVivienda,id}= req.body;
        
        const family = new Family({
            nombre:nombre,
            canton:canton,
            nivelRiesgo:nivelRiesgo,
            tipoVivienda:tipoVivienda,
            id:id
        });

        const familySaved = await family.save();

        if(!familySaved){
            return res.status(409).json({error:"Error saving family"});

        }

        return res.status(201).json({"result":"Family saved"});

    } catch (error) {
        console.error(error);
        return res.status(500).json({error:"Internal Server Error"});
    }
}


controller.delete = async(req,res,next)=>{
    try {
        const {identifier}=req.params;

        const family = await Family.findOneAndDelete({id:identifier});
        
        if(!family){
            return res.status(404).json({message:"Family not found"})
        }

        return res.status(200).json({"result":"Family deleted"})

    } catch (error) {
        console.error(error);
        return res.status(500).json({error:"Internal Server Error"});
    }
}


controller.findAll=async(req,res,next)=>{

    try {
        const families = await Family.find();

        return res.status(200).json({families})
    }catch(error){
        console.error(error);
        return res.status(500).json({error:"Internal Server Error"});
    }   
}

module.exports = controller;