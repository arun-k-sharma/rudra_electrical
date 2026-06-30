const Product = require('../models/product.js');

const products = [

    {
        name: "9W LED Bulb",
        price: 120,
        category: "Lighting",
        description: "Energy-efficient 9W LED bulb with bright white light.",
        image: "https://picsum.photos/600/600?random=1",
        stock: 45,
        featured: true,
        createdAt: new Date()
    },

    {
        name: "LED Tube Light 20W",
        price: 350,
        category: "Lighting",
        description: "20W LED tube light suitable for homes and offices.",
        image: "https://picsum.photos/600/600?random=2",
        stock: 20,
        featured: true,
        createdAt: new Date()
    },

    {
        name: "Modular Switch",
        price: 80,
        category: "Switches",
        description: "Premium modular switch with durable build quality.",
        image: "https://picsum.photos/600/600?random=3",
        stock: 120,
        featured: false,
        createdAt: new Date()
    },

    {
        name: "6A Power Socket",
        price: 95,
        category: "Sockets",
        description: "6A modular socket suitable for residential use.",
        image: "hhttps://picsum.photos/600/600?random=4",
        stock: 90,
        featured: false,
        createdAt: new Date()
    },

    {
        name: "MCB 32A",
        price: 420,
        category: "Protection",
        description: "32A Miniature Circuit Breaker for electrical safety.",
        image: "https://picsum.photos/600/600?random=5",
        stock: 30,
        featured: true,
        createdAt: new Date()
    },

    {
        name: "PVC Electrical Wire (90m)",
        price: 1850,
        category: "Wires",
        description: "High-quality copper electrical wire for house wiring.",
        image: "https://picsum.photos/600/600?random=6",
        stock: 18,
        featured: true,
        createdAt: new Date()
    },

    {
        name: "Extension Board",
        price: 650,
        category: "Accessories",
        description: "4-socket extension board with overload protection.",
        image: "https://picsum.photos/600/600?random=7",
        stock: 15,
        featured: false,
        createdAt: new Date()
    },

    {
        name: "LED Decorative String Lights",
        price: 299,
        category: "Decorative",
        description: "Waterproof decorative LED lights for festivals and events.",
        image: "https://picsum.photos/600/600?random=8",
        stock: 60,
        featured: true,
        createdAt: new Date()
    }

];


// https://picsum.photos/600/600?random=1
// https://picsum.photos/600/600?random=2
// https://picsum.photos/600/600?random=3
// https://picsum.photos/600/600?random=4
// https://picsum.photos/600/600?random=5
// https://picsum.photos/600/600?random=6
// https://picsum.photos/600/600?random=7
// https://picsum.photos/600/600?random=8
// https://picsum.photos/600/600?random=9
// https://picsum.photos/600/600?random=10






async function insertTemp() {
    await Product.insertMany(products);
    console.log("Products inserted successfully.");
}

module.exports = insertTemp;