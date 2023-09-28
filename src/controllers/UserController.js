const UserService = require('../services/UserService.js');

class UserController{

    static async addUser(req,res){
        
        try{
    
            const {nome,email,senha} = req.body;

            const created = await UserService.createNewUser({nome,email,senha});

            if(created) res.status(200).json("Usuário cadastrado com sucesso.");
            else res.status(409).json("Conflito 409 - Usuário já possui cadastro!");
        }
        catch(error){

            res.status(500).json(`${error} - Erro no servidor - Não foi possível cadastrar usuário.`);
        }

    }

}

module.exports = UserController;