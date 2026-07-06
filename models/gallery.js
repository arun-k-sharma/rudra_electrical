const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    description: {
        type: String
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
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Gallery", gallerySchema);