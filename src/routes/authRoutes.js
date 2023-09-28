const AuthController = require('../controllers/AuthController.js');
const {Router} = require('express');

const router = Router();

router.post('/auth/login',AuthController.login);

module.exports = router;