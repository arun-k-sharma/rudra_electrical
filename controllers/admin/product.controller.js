const Product = require('../../models/product');

// showProducts()
// │      showAddProductPage()
// │      createProduct()
// │      showEditProductPage()
// │      updateProduct()
// │      deleteProduct()

function getAddProductForm(req, res) {
    res.render('admin/product-form', { pageTitle: 'Add Product', admin: req.admin });
}

//adding new product to the database
async function addProduct(req, res) {
    try {

        console.log('Request Body:', req.body);
        console.log('Uploaded File:', req.file);
        const product = await Product.create({
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description,
            image: {
                url: req.file.path, // Use the path of the uploaded image from Cloudinary
                public_id: req.file.filename // Use the filename of the uploaded image from Cloudinary
            },
            stock: req.body.stock,
            featured: req.body.featured === 'on', // Convert checkbox value to boolean
            specifications: {
                brand: req.body.specifications.brand || "Not Available",
                power: req.body.specifications.power || "Not Available",
                voltage: req.body.specifications.voltage || "Not Available",
                color: req.body.specifications.color || "Not Available",
                warranty: req.body.specifications.warranty || "No Warranty"
            }
        })

        console.log('Product added successfully:', product);
        res.redirect('/admin/products');
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).render('admin/product-form', { pageTitle: 'Add Product', admin: req.admin, error: 'Error adding product' });
    }
}

//showProducts() - Fetch all products from the database
async function getAllProducts() {
    try {
        const products = await Product.find();
        return products;
    }
    catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

module.exports = {
    getAddProductForm,
    addProduct,
    getAllProducts
};