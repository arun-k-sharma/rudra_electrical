const express = require('express');
const auth = require('../../middlewares/auth');
const upload = require('../../middlewares/upload');
const productController = require('../../controllers/admin/product.controller');

const router = express.Router();

// Function: showProducts()
router.get('/', auth, async (req, res) => {
    const products = await productController.getAllProducts();
    res.render('admin/products', {
        pageTitle: "Products",
        admin: req.admin,
        currentPage: 'products',
        products: products
    });
});



// Function: showAddProductPage()
router.get(
    '/add-product',
    auth,
    productController.getAddProductForm
);

// POST /admin/products/add-product
router.post('/add-product', auth, upload.single('image'),  (req, res, next) => {
    console.log("Upload finished");
    console.log(req.file);
    next();
}, productController.addProduct);



// POST /admin/products/delete/:id
router.post("/delete/:id", productController.deleteProduct);




module.exports = router;







// Function: createProduct()

// Description: Save a new product to MongoDB.

// GET  /admin/products/edit/:id

// Function: showEditProductPage()

// Description: Display the edit form with existing product data.

// POST /admin/products/edit/:id

// Function: updateProduct()

// Description: Update an existing product.

// POST /admin/products/delete/:id

// Function: deleteProduct()

// Description: Delete a product from the database.