const express = require('express')
const router = express.Router()
const jabatanController =   require('../controllers/jabatan.controller');
// const authController =   require('../controllers/auth.controller');

// // Call the middleware to check for authorization
// router.use(authController.authorize);

router.get('/', jabatanController.jabatan);
router.get('/create', jabatanController.createPage);
router.post('/store', jabatanController.storeJabatan);
router.get('/edit/:id', jabatanController.editPage);
router.post('/update/:id', jabatanController.updateJabatan);
router.delete('/delete/:id', jabatanController.deleteJabatan);

module.exports = router