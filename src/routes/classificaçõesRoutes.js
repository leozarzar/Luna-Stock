const {Router} = require('express');
const ClassificaçãoController = require('../controllers/ClassificaçãoController');

const router = Router();

router.get("/classificacoes",ClassificaçãoController.getAllClasses);
router.get("/classificacoes/:id");
router.post("/classificacoes",ClassificaçãoController.addClass);
router.patch("/classificacoes/:id");
router.delete("/classificacoes/:id");
router.delete("/classificacoes/deleteAll");

module.exports = router;