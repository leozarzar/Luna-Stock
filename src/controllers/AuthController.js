const AuthService = require('../services/AuthService.js');

class AuthController{

    static async login(req,res){

        try{

            const {email,password} = req.body;

            const login = await AuthService.login({email,password});
    
            if(login === null) res.status(401).json("Usuário ou senha inválidos!")
            else res.status(200).json(`## AcessToken ## ${login} - Dados validados.`)
        }
        catch(error){

            res.status(500).json(`${error} - Erro no servidor - Não foi possível mandar requisição.`);
        }
    }
}

module.exports = AuthController;