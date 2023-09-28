const {Router} = require('express');
const UserController = require('../controllers/UserController.js');
const tokenVerification = require('../middleware/tokenVerification.js');

const router = Router();

router.use(tokenVerification);
router.post("/users",UserController.addUser);

module.exports = router;