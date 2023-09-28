const db = require("../models")

class ClassificaçãoController{

    static async getAllClasses(req,res){
        
        try{

            const classificações = await db.classificações.findAll();
            if(classificações == 0) res.status(200).json("Não há classificações cadastradas.");
            else res.status(200).json(classificações);
        }
        catch(error){
            res.status(500).json(`${error} - Não foi possível acessar as classificações.`);
        }
    }
    static async addClass(req,res){
        
        try{

            const classificação = await db.classificações.create(req.body);
            if(classificação === null) res.status(404).json("Classificação não foi cadastrada.");
            else res.status(200).json(classificação);
        }
        catch(error){
            res.status(500).json(`${error} - Não foi possível acessar as classificações.`);
        }
    }

}

module.exports = ClassificaçãoController;