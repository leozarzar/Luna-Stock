const db = require('../models');
const {hash} = require('bcryptjs');
//const uuid = require('uuid');

class UserService {

    static async createNewUser(dto){

        const [,created] = await db.users.findOrCreate({
            where:{
                email: dto.email
            },
            defaults:{
                //id: uuid.v4(),
                nome: dto.nome,
                email: dto.email,
                senha_hash: await hash(dto.senha,8)
            }
        });

        return created;

    }

}

module.exports = UserService;