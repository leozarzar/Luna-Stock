const db = require("../models");
const {compare} = require('bcryptjs');
const {sign} = require('jsonwebtoken');
const auth = require('../config/jsonSecret.js');

class AuthService {

    static async login(dto){
        
        const user = await db.users.findOne({
            attributes: ['id', 'email', 'senha_hash'],
            where:{
                email: dto.email
            }
        });

        if(user === null) return null;

        if( ! await compare(dto.password, user.senha_hash) ) return null;

        const accessToken = sign({
            id: user.id,
            email: user.email
        },auth.secret,{
            expiresIn: 86400
        });

        return accessToken;

    }

}

module.exports = AuthService;