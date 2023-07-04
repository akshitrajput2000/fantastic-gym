const express = require('express');
const router = express.Router();
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const authController = require('../controller/auth.controller');

router.post('/register', awaitHandlerFactory(authController.register)); // localhost:3000/api/v1/auth/register
router.post('/login', awaitHandlerFactory(authController.login)); // localhost:3000/api/v1/auth/login

module.exports = router;