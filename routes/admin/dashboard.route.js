const express = require('express');
const auth = require('../../middlewares/auth');
const Product = require('../../models/Product');
const Gallery = require('../../models/Gallery');
const Booking = require('../../models/Booking');


const router = express.Router();



router.get('/', auth, async (req, res) => {

    const productCount = await Product.countDocuments();
    const imageCount = await Gallery.countDocuments();
    const featuredCount = await Product.countDocuments({ featured: true });
    const recentProducts = await Product.find().sort({ createdAt: -1 }).limit(3);
    const bookingCount = await Booking.countDocuments();


    res.render('admin/dashboard', {
        pageTitle:"Dashboard",
        admin:req.admin,
        currentPage: 'dashboard',
        productCount: productCount,
        imageCount: imageCount,
        featuredCount: featuredCount,
        recentProducts: recentProducts,
        bookingCount: bookingCount
    });
})


module.exports = router