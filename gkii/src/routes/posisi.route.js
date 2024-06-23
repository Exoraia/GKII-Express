const express = require('express')
const router = express.Router()
const posisiController =   require('../controllers/posisi.controller');
const authController =   require('../controllers/auth.controller');

// Call the middleware to check for authorization
router.use(authController.authorize);

// Retrieve all employees
router.get('/', posisiController.findAll);
// Create a new user
router.post('/', posisiController.create);
// Retrieve a single user with id
router.get('/search', posisiController.search);
// Update a user with id
router.put('/:id', posisiController.update);
// Delete a user with id
router.delete('/:id', posisiController.delete);
module.exports = router