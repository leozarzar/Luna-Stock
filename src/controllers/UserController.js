const UserService = require('../services/UserService.js');

class UserController{

    static async getAllUsers(req,res){

        try{

            const users = await UserService.getAllUsers();

            res.status(200).json(users);
        }
        catch(error){

            res.status(500).json(`${error}`);
        }
    }

    static async getUser(req,res){

        try{

            const {id} = req.params;

            const user = await UserService.getUser(id);

            res.status(200).json(user);
        }
        catch(error){

            res.status(500).json(`${error}`);
        }
    }

    static async addUser(req,res){
        
        try{

            await UserService.createNewUser(req.body);

            res.status(200).json("Usuário cadastrado com sucesso.");
        }
        catch(error){

            res.status(500).json(`${error}`);
        }

    }

    static async updateUser(req,res){
        
        try{

            const {id} = req.params;
            
            await UserService.updateUser(req.body,id);

            res.status(200).json("Usuário atualizado com sucesso.");
        }
        catch(error){

            res.status(500).json(`${error}`);
        }

    }

    static async deleteUser(req,res){

        try{

            const {id} = req.params;

            await UserService.deleteUser(id);

            res.status(200).json("Usuário deletado com sucesso.");
        }
        catch(error){

            res.status(500).json(`${error}`);
        }
    }

    static async deleteAllUsers(req,res){

        try{

            await UserService.deleteAllUsers();

            res.status(200).json("Usuários deletados com sucesso.");
        }
        catch(error){

            res.status(500).json(`${error}`);
        }
    }

}

module.exports = UserController;