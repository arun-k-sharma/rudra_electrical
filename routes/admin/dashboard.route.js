const express = require('express');
const auth = require('../../middlewares/auth');

const router = express.Router();



router.get('/', auth, (req, res) => {
    res.render('admin/dashboard', {
        pageTitle:"Dashboard",
        admin:req.admin,
        currentPage: 'dashboard'
    });
})


module.exports = router