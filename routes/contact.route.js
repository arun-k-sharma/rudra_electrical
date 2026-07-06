const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('website/contact');
});


module.exports = router;