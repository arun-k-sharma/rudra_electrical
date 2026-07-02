const { Schema, mongoose } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        url: {
            type: String,
            required: true
        },
        public_id: {
            type: String,
            required: true
        }
    },

    stock: {
        type: Number,
        required: true
    },

    featured: {
        type: Boolean,
        required: true
    },

    specifications: {
        brand: {
            type: String,
            default: "Not Available"
        },
        power: {
            type: String,
            default: "Not Available"
        },
        voltage: {
            type: String,
            default: "Not Available"
        },
        color: {
            type: String,
            default: "Not Available"
        },
        warranty: {
            type: String,
            default: "No Warranty"
        }
    }

}, {
    timestamps: true
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;