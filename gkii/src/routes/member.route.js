const express = require('express')
const router = express.Router()
const memberController =   require('../controllers/member.controller');
// const authController =   require('../controllers/auth.controller');

// // Call the middleware to check for authorization
// router.use(authController.authorize);

router.get('/', memberController.member);
router.get('/create', memberController.createPage);
router.post('/store', memberController.storeMember);
router.get('/edit/:id', memberController.editPage);
router.post('/update/:id', memberController.updateMember);
router.delete('/delete/:id', memberController.deleteMember);

module.exports = router