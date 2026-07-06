const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('website/services');
});


module.exports = router;