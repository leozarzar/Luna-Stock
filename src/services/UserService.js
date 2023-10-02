const db = require('../models');
const {hash} = require('bcryptjs');
const uuid = require('uuid');

class UserService {

    static async getAllUsers(){

        const users = await db.users.findAll();

        if(users.lenght === 0) throw new Error("Não existe usuário cadastrado.");
        else if(users == null) throw new Error("Não foi possível acessar os usuários.");
        
        return users;
    
    }

    static async getUser(id){

        const user = await db.users.findByPk(id);

        if(user == null) throw new Error("Usuário não localizado.");

        return user;
    }

    static async createNewUser(data){

        data.senha_hash = await hash(data.senha_hash,8);

        const [,created] = await db.users.findOrCreate({

            where:{

                email: data.email
            },
            defaults:{
                
                id: uuid.v4(),
                ...data
            }
        });

        if(!created) throw new Error("E-mail já em uso.");

    }

    static async updateUser(data,id){

        if(data.email != null){

            const emailExists =  null !== await db.users.findOne({

                where:{

                    email: data.email
                }
            });

            if(emailExists) throw new Error("E-mail já em uso.");
        }

        const idExists =  null !== await db.users.findOne({

            where:{
                id: id
            }
        });

        if(!idExists) throw new Error("Id não existe.");

        if(data.senha_hash != null) data.senha_hash = await hash(data.senha_hash,8);

        await db.users.update({

            ...data
        },{
            where:{

                id: id
            }
        });

    }

    static async deleteUser(id){

        const destroyed = await db.users.destroy({

            where:{

                id:id
            }
        });
        
        if(!destroyed) throw new Error("Id não existe.");
    }

    static async deleteAllUsers(){

        const destroyed = await db.users.destroy({

            truncate: true
        });
    }

}

module.exports = UserService;