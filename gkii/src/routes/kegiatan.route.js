const express = require('express')
const router = express.Router()
const kegiatanController =   require('../controllers/kegiatan.controller');
const authController =   require('../controllers/auth.controller');

// Call the middleware to check for authorization
router.use(authController.authorize);

router.get('/', kegiatanController.kegiatan);
router.get('/create', kegiatanController.createPage);
router.post('/store', kegiatanController.storeKegiatan);
router.get('/edit/:id', kegiatanController.editPage);
router.post('/update/:id', kegiatanController.updateKegiatan);
router.delete('/delete/:id', kegiatanController.deleteKegiatan);

module.exports = router