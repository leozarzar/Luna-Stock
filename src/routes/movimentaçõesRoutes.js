const {Router} = require('express');
const MovimentaçãoController = require('../controllers/MovimentaçãoController');

const router = Router();

router.get("/movimentacoes",MovimentaçãoController.getAllMovements);
router.get("/movimentacoes/:id");
router.post("/movimentacoes");
router.patch("/movimentacoes/:id");
router.delete("/movimentacoes/:id");
router.delete("/movimentacoes/deleteAll");

module.exports = router;