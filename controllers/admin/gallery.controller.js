const cloudinary  = require('../../config/cloudinary');
const Gallery = require('../../models/Gallery');

async function add(req, res) {
    res.render('admin/gallery-form', {
        admin:req.admin,
        currentPage: 'gallery',
    })
}


async function uploadImage(req, res) {
    try {
        const galleryImage = await Gallery.create({
            title:req.body.title,
            description:req.body.description,
            category:req.body.category,
            image: {
                url: req.file.path,
                public_id: req.file.filename
            },
        });
        // console.log('Image uploaded successfully:', galleryImage);
        res.redirect('/admin/gallery');
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).redirect('/admin/gallery/add');
    }

}

async function deleteImage(req, res) {
    try {
        const imageId = req.params.id;
        const image = await Gallery.findById(imageId);
        if (!image) {
            return res.status(404).send('Image not found.');
        }
        if(image.image.public_id) {
            await cloudinary.uploader.destroy(image.image.public_id);
        }
        await Gallery.findByIdAndDelete(imageId);
        res.redirect('/admin/gallery');
    }catch(error) {
        console.error('Error deleting image:', error);
        res.status(500).redirect('/admin/gallery');
    }
    
}

module.exports = {
    add,
    uploadImage,
    deleteImage
}