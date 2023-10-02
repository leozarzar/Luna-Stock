const {Router} = require('express');
const UserController = require('../controllers/UserController.js');
const tokenVerification = require('../middleware/tokenVerification.js');

const router = Router();

router.post("/users",UserController.addUser);

router.use(tokenVerification);

router.get("/users", UserController.getAllUsers);
router.get("/users/:id", UserController.getUser);
router.patch("/users/:id", UserController.updateUser);
router.delete("/users/deleteAll", UserController.deleteAllUsers);
router.delete("/users/:id", UserController.deleteUser);

module.exports = router;