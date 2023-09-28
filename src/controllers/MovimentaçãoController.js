const db = require("../models")

class MovimentaçãoController{

    static async getAllMovements(req,res){
        
        try{

            const Movimentações = await db.movimentações.findAll();
            if(Movimentações == 0) res.status(200).json("Não há movimentações cadastradas.");
            else res.status(200).json(Movimentações);
        }
        catch(error){
            res.status(500).json(`${error} - Não foi possível acessar as movimentações.`);
        }
    }

}

module.exports = MovimentaçãoController;