const express = require('express');
const authController = require('../../controllers/admin/auth.controller');

const router = express.Router();



router.get('/login', authController.showLoginPage);


router.post('/login', authController.login);

router.get('/logout', authController.logout);



module.exports = router;


