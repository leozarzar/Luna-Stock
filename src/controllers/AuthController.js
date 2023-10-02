const AuthService = require('../services/AuthService.js');

class AuthController{

    static async login(req,res){

        try{

            const login = await AuthService.login(req.body);
    
            if(login === null) res.status(401).json("Usuário ou senha inválidos!")
            
            res.status(200).json(`## AcessToken ## ${login} - Dados validados.`)
        }
        catch(error){

            res.status(500).json(`${error}`);
        }
    }
}

module.exports = AuthController;