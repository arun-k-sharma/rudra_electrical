const express = require('express');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.get('/', auth, (req, res) => {
    console.log(req.admin);
    res.render('admin/products', {
        pageTitle:"Products",
        admin:req.admin
    });
})




module.exports = router;

// GET  /admin/products

// Function: showProducts()

// Description: Display all products in the admin panel.

// GET  /admin/products/add

// Function: showAddProductPage()

// Description: Display the form to add a new product.

// POST /admin/products/add

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