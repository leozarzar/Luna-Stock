const {Router} = require('express');
const MovimentaçãoController = require('../controllers/MovimentaçãoController');

const router = Router();

router.get("/movimentacoes",MovimentaçãoController.getAllMovements);

module.exports = router;