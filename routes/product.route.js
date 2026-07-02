const express = require('express');
const productController = require('../controllers/website/product.controller');


const router = express.Router();


router.get('/', productController.getProducts);


router.get('/view-detail/:id', productController.getProductById);





module.exports = router;