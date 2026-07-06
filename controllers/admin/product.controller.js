const Product = require('../../models/product');
const cloudinary = require('../../config/cloudinary');

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
        if(!req.file) {
            return res.status(400).send("Please upload an image.");
        }
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

//deleteProduct() - Delete a product by ID
async function deleteProduct(req, res) {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);

        //return if product is not found
        if (!product) {
            return res.redirect("/admin/products");
        }

        // Delete the image from Cloudinary
        if (product.image.public_id) {
            await cloudinary.uploader.destroy(product.image.public_id);
        }

        await Product.findByIdAndDelete(productId);
        res.redirect('/admin/products');

    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).send('Error deleting product');
    }
}

module.exports = {
    getAddProductForm,
    addProduct,
    getAllProducts,
    deleteProduct
};