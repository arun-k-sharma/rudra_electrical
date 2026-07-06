const express = require('express');
const auth = require('../../middlewares/auth');
const galleryController = require('../../controllers/admin/gallery.controller');
const upload = require('../../middlewares/upload');
const Gallery = require('../../models/gallery');

const router = express.Router();



router.get('/', auth, async (req, res) => {
    const galleryImages = await Gallery.find().sort({ createdAt: -1 });
    res.render('admin/gallery', {
        pageTitle:"Gallery",
        admin:req.admin,
        currentPage: 'gallery',
        galleryImages: galleryImages
    });
});

// GET  /admin/gallery/add render form to add new image
router.get('/add',auth, galleryController.add);

// POST /admin/gallery/add upload new image
router.post('/add', auth, upload.single('image'), galleryController.uploadImage);


// POST /admin/gallery/delete/:id delete image
router.post('/delete/:id', auth, galleryController.deleteImage);


module.exports = router





// GET  /admin/gallery

// Function: showGallery()

// Description: Display all gallery images.

// GET  /admin/gallery/add

// Function: showAddGalleryPage()

// Description: Display the image upload form.

// POST /admin/gallery/add

// Function: uploadImage()

// Description: Upload and save a gallery image.

// POST /admin/gallery/delete/:id

// Function: deleteImage()

// Description: Remove a gallery image.