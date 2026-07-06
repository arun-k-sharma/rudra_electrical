const router = require('express').Router();
const galleryController = require('../controllers/website/gallery.controller');

router.get('/', galleryController.showGallery);

module.exports = router;