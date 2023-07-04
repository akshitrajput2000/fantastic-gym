const express = require('express');
const router = express.Router();
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const userController = require('../controller/user.controller.js');

router.get('/allUser', awaitHandlerFactory(userController.allUser)); // localhost:3000/api/v1/user/allUser
router.get('/uemailcheck/:uemail', awaitHandlerFactory(userController.uemailcheck)); // localhost:3000/api/v1/uemailcheck/email
router.get('/uuemailcheck/:uemail', awaitHandlerFactory(userController.uuemailcheck)); // localhost:3000/api/v1/uuemailcheck/email
router.get('/getuser/:userid', awaitHandlerFactory(userController.getUser)); // localhost:3000/api/v1/getuser/userid
router.get('/profile/:userid', awaitHandlerFactory(userController.profile)); // localhost:3000/api/v1/profile/userid
router.put('/updateuser', awaitHandlerFactory(userController.updateuser))
router.delete('/deleteuser/:userid', awaitHandlerFactory(userController.deleteuser))
router.get('/searchuser/:searchtxt?', awaitHandlerFactory(userController.searchuser))

module.exports = router;