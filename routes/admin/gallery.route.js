const express = require('express');
const auth = require('../../middlewares/auth');
const galleryController = require('../../controllers/admin/gallery.controller');

const router = express.Router();



router.get('/', auth, (req, res) => {
    res.render('admin/gallery', {
        pageTitle:"Gallery",
        admin:req.admin,
        currentPage: 'gallery'
    });
})


router.get('/add',auth, galleryController.add);


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