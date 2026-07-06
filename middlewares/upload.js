const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads', // Specify the folder in Cloudinary where files will be stored
        allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'avif'], // Specify allowed file formats
    },
}); 
// console.log("Cloudinary storage configured: ");

const upload = multer({storage: storage});

module.exports = upload;