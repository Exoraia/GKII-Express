const express = require('express')
const router = express.Router()
const informasiController =   require('../controllers/informasi.controller.js');

// Retrieve all employees
router.get('/', informasiController.informasi);
module.exports = router