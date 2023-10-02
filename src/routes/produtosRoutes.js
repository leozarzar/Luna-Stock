const {Router} = require('express');
const ProdutoController = require('../controllers/ProdutoController');

const router = Router();

router.get("/produtos",ProdutoController.getAllProducts);
router.get("/produtos/:id");
router.post("/produtos",ProdutoController.addProduct);
router.patch("/produtos/:id");
router.delete("/produtos/:id");
router.delete("/produtos/deleteAll");

module.exports = router;