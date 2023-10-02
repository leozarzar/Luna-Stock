const db = require("../models");
const uuid = require('uuid');

class RoleService {

    static async createNewRole(data){

        const {nome,descrição} = data;

        const [,created] = await db.roles.findOrCreate({
            where:{

                nome: nome
            },
            defaults:{

                id: uuid.v4(),
                nome: nome,
                descrição: descrição
            }
        });

        return created;

    }
}

module.exports = RoleService;