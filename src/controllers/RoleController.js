const RoleService = require("../services/RoleService.js");

class RoleController {

    static async addRole(req,res){

        const {nome,descrição} = req.body;
        
        try{
            
            const created = await RoleService.createNewRole({nome,descrição});
    
            if(created) res.status(201).send("Perfil criado com sucesso.");
            else res.status(409).json("Conflito 409 - Perfil já cadastrado!");
        }
        catch(error){

            res.status(500).json(`${error} - Erro no servidor - Não foi possível cadastrar perfil.`);
        }


    }

}

module.exports = RoleController;