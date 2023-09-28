const {Router} = require('express');
const ProdutoController = require('../controllers/ProdutoController');

const router = Router();

router.get("/produtos",ProdutoController.getAllProducts);
router.post("/produtos",ProdutoController.addProduct);

module.exports = router;