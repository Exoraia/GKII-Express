const express = require('express')
const router = express.Router()
const usersController =   require('../controllers/users.controller');
const authController =   require('../controllers/auth.controller');

// Call the middleware to check for authorization
router.use(authController.authorize);

// Retrieve all users
router.get('/', usersController.findAll);
// Create a new user
router.post('/', usersController.create);
// Retrieve a single user with id
router.get('/:id', usersController.findById);
// Update a user with id
router.put('/:id', usersController.update);
// Delete a user with id
router.delete('/:id', usersController.delete);
module.exports = router