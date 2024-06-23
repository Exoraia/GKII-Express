const express = require('express')
const router = express.Router()
const jadwalController =   require('../controllers/jadwal.controller.js');

// Retrieve all employees
router.get('/', jadwalController.jadwal);
module.exports = router