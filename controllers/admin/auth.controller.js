const Admin = require('../../models/Admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//show login page
async function showLoginPage(req, res) {
    res.render('admin/login');
}

// Login
async function login(req, res) {
    try {

        const { username, password } = req.body;

        const admin = await Admin.findOne({ username });

        if (!admin) {
            return res.status(401).render("admin/login", {
                error: "Invalid username or password."
            });
        }

        const valid = await bcrypt.compare(password, admin.password);

        if (!valid) {
            return res.status(401).render("admin/login", {
                error: "Invalid username or password."
            });
        }

        const token = jwt.sign(
            {
                id: admin._id,
                username: admin.username
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: false, // Change to true when using HTTPS in production
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000
        });

        return res.redirect("/admin/dashboard");

    } catch (err) {

        console.error("Login Error:", err);

        return res.status(500).render("admin/login", {
            error: "Something went wrong. Please try again."
        });

    }
}

//logout
async function logout(req, res) {
    try {
        res.clearCookie('token');

        res.render('admin/login');
    } catch (err) {
        console.log(err);
        return res.status(401).json({
            message:"Logging out failed"
        })
    }
}


module.exports = {
    showLoginPage,
    login,
    logout
}