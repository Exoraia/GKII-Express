const express = require('express')
const router = express.Router()
const userController =   require('../controllers/user.controller.js');
const authController =   require('../controllers/auth.controller');

// Call the middleware to check for authorization
router.use(authController.authorize);

router.get('/', userController.user);
router.get('/create', userController.createPage);
router.post('/store', userController.storeUser);
router.get('/edit/:id', userController.editPage);
router.post('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router