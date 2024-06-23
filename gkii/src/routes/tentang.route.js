const express = require('express')
const router = express.Router()
const tentangController =   require('../controllers/tentang.controller.js');

// Retrieve all employees
router.get('/', tentangController.tentang);
module.exports = router