const express = require('express')
const router = express.Router()
const adminController =   require('../controllers/admin.controller.js');
const authController =   require('../controllers/auth.controller');

router.use(authController.authorize);

// Retrieve all employees
router.get('/', adminController.admin);
module.exports = router