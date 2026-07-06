const Product = require('../../models/Product');


//get products
async function getProducts(req, res) {
    try {
        const pages = parseInt(req.query.page) || 1;
        const limit = 12;

        const totalPages = await Product.countDocuments();
        
        const products = await Product.find()
            .skip((pages-1)*limit)
            .limit(limit);

        res.render('website/products', {
            products,
            totalPages:Math.ceil(totalPages / limit),
            currentPage:pages
        });

        
    } catch (err) {
        console.log('Failed to Fetch Data...!');
        res.status(500).json({
            message: "Failed to Fetch Data...!",
            error: err.message
        });
    }
}


//get particular product by :id
async function getProductById(req, res) {
    try {
        const  id  = req.params.id;

        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.render('website/product_detail', {
            product
        });
    } catch (err) {
        console.log('Failed in Fetching Data...!');
        res.status(500).json({
            message: "Failed in Fetching Data...!",
            error: err.message
        });
    }
}


//create a new product
async function createProduct(req, res) {
    try {
        const product = await Product.create(req.body);

        res.status(201).json({
            message: "Product created successfully",
            product
        });
    } catch (err) {
        console.log('Product Saving Failed...');
        res.status(500).json({
            message: "Product saving failed",
            error: err.message
        });
    }
}

async function updateProduct() {

}

async function deleteProduct() {

}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}