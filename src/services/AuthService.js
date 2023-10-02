const db = require("../models");
const {compare} = require('bcryptjs');
const {sign} = require('jsonwebtoken');
const auth = require('../config/jsonSecret.js');

class AuthService {

    static async login(data){
        
        const user = await db.users.findOne({
            attributes: ['id', 'email', 'senha_hash','role_id'],
            where:{
                email: data.email
            }
        });

        if(user === null || !await compare(data.password, user.senha_hash) ) throw new Error("Usuário ou senha inválidos!");

        const accessToken = sign({
            id: user.id,
            email: user.email,
            role: user.role_id
        },auth.secret,{
            expiresIn: 86400
        });

        return accessToken;

    }

}

module.exports = AuthService;