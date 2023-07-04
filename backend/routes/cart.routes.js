const express = require('express');
const router = express.Router();
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const cartController = require('../controller/cart.controller.js');

router.put('/', awaitHandlerFactory(cartController.cart)); // localhost:3000/api/v1/cart
router.get('/createInvoice', awaitHandlerFactory(cartController.createInvoice)); // localhost:3000/api/v1/cart

module.exports = router;