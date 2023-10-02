const bodyParser = require('body-parser');
const authRoutes = require('./authRoutes.js');
const rolesRoutes = require("./rolesRoutes.js")
const usersRoutes = require('./usersRoutes.js');
const produtosRoutes = require('./produtosRoutes.js');
const classificaçõesRoutes = require('./classificaçõesRoutes.js');
const movimentaçõesRoutes = require('./movimentaçõesRoutes.js');

module.exports = app => {

    app.use(bodyParser.json());
    app.get("/", (req,res) => res.status(200).send("Bem-vindo ao Luna!"));
    app.use(authRoutes);
    app.use(usersRoutes);
    app.use(rolesRoutes);
    app.use(produtosRoutes);
    app.use(classificaçõesRoutes);
    app.use(movimentaçõesRoutes);

}
