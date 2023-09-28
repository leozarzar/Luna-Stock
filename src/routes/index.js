const bodyParser = require('body-parser');
const usersRoutes = require('./usersRoutes.js');
const produtosRoutes = require('./produtosRoutes.js');
const classificaçõesRoutes = require('./classificaçõesRoutes.js');
const movimentaçõesRoutes = require('./movimentaçõesRoutes.js');
const authRoutes = require('./authRoutes.js');

module.exports = app => {

    app.use(bodyParser.json());
    app.use(authRoutes);
    app.use(usersRoutes);
    app.use(produtosRoutes);
    app.use(classificaçõesRoutes);
    app.use(movimentaçõesRoutes);
    app.get("/", (req,res) => res.status(200).send("Bem-vindo ao Luna!"));

}
