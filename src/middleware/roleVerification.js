const db = require("../models");

module.exports = (allRoles) => {

    return async (req,res,next) => {

        console.log(req.userRole);
        const role = await db.roles.findByPk(req.userRole);

        if(role === null) return res.status(401).json("Erro: Perfil não foi encontrado.");

        if(!allRoles.includes(role.nome)) return res.status(401).json("Usuário não tem permissão.");

        if(role.nome === "Cliente" ) req.params.id = req.userId;

        return next();
    }
}

