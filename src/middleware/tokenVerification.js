const {verify,decode} = require('jsonwebtoken');
const auth = require('../config/jsonSecret');

module.exports = async (req,res,next) => { 

    const token = req.headers.authorization;

    if(!token) res.status(401).send('Token não encontrado no cabeçalho da requisição.');

    try{

        const accessToken = token.split(' ')[1];

        verify(accessToken, auth.secret);

        const {id,email} = await decode(accessToken);
        req.userEmail = email;
        req.userId = id;

        return next();
    }
    catch(error){
        res.status(500).send(`${error} - Acesso negado.`);
    }

}