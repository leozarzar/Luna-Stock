const {Router} = require('express');
const ClassificaçãoController = require('../controllers/ClassificaçãoController');

const router = Router();

router.get("/classificacoes",ClassificaçãoController.getAllClasses);
router.post("/classificacoes",ClassificaçãoController.addClass);

module.exports = router;