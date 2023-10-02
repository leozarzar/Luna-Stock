const {Router} = require('express');
const UserController = require('../controllers/UserController.js');
const tokenVerification = require('../middleware/tokenVerification.js');
const roleVerification = require('../middleware/roleVerification.js');

const router = Router();

router.post("/users",UserController.addUser);

router.use(tokenVerification);

router.get("/users/this", roleVerification(["Cliente"]), UserController.getUser);
router.get("/users", roleVerification(["Administrador"]), UserController.getAllUsers);
router.get("/users/:id", roleVerification(["Administrador"]), UserController.getUser);
router.patch("/users/this", roleVerification(["Cliente"]), UserController.updateUser);
router.patch("/users/:id", roleVerification(["Administrador"]), UserController.updateUser);
router.delete("/users/deleteAll", roleVerification(["Administrador"]), UserController.deleteAllUsers);
router.delete("/users/this", roleVerification(["Cliente"]), UserController.deleteUser);
router.delete("/users/:id", roleVerification(["Administrador"]), UserController.deleteUser);

module.exports = router;