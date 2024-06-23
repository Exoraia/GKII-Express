const express = require('express')
const router = express.Router()
const usersController =   require('../controllers/users.controller');

// Create a new user
router.post('/', usersController.create);
module.exports = router