const {verify,decode} = require('jsonwebtoken');
const auth = require('../config/jsonSecret');
const db = require("../models");

module.exports = async (req,res,next) => { 

    const token = req.headers.authorization;

    if(!token) return res.status(401).send('Erro: Token não encontrado no cabeçalho da requisição.');

    try{

        const accessToken = token.split(' ')[1];

        verify(accessToken, auth.secret);

        const {id,email,role} = await decode(accessToken);

        if(null === await db.users.findOne({
            where:{
                id: id,
                email: email,
                role_id: role
            }
        })) return res.status(401).send('Erro: Necessário realizar um novo login.');

        req.userEmail = email;
        req.userId = id;
        req.userRole = role;

        return next();
    }
    catch(error){
        
        res.status(500).send(`${error} - Acesso negado.`);
    }

}