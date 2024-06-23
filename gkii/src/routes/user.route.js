const express = require('express')
const router = express.Router()
const userController =   require('../controllers/user.controller.js');

// Retrieve all employees
router.get('/', userController.user);
router.get('/create', userController.createPage);
router.post('/store', userController.storeUser);
router.get('/edit/:id', userController.editPage);
router.post('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router