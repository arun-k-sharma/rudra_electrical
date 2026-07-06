const Gallery = require('../../models/gallery');

async function showGallery(req, res) {
    try {
        const galleryItems = await Gallery.find().limit(12);
        res.render('website/gallery', { galleryItems });
    }catch (error) {
        console.error('Error fetching gallery:', error);
        res.status(500).redirect('/');
    }
}

module.exports = {
    showGallery
};