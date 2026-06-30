const bcrypt = require('bcrypt');
const Admin = require('../models/admin');

async function seedAdmin() {
    const admin = await Admin.findOne({
        username:process.env.ADMIN_USERNAME
    });

    if(admin) return;

    const hash = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

    await Admin.create({
        username: process.env.ADMIN_USERNAME,
        password: hash
    });

    console.log('Admin created...!');
}

module.exports = seedAdmin;