const Admin = require('../../models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//show login page
async function showLoginPage(req, res) {
    res.render('admin/login');
}

//login
async function login(req, res) {
    try {
        const { username, password } = req.body;

        const admin = await Admin.findOne({ username });

        if (!admin) return res.status(401).json({
            // message: "Invalid credentials"
            message:"Admin not found in DB"
        });

        const valid = await bcrypt.compare(
            password,
            admin.password
        );

        if (!valid) {
            return res.status(401).json({
                // message: "Invalid credentials"
                message: "Not valid password"
            })
        }

        const token = jwt.sign({
            id: admin._id,
            username: admin.username
        },
            process.env.JWT_SECRET,

            {
                expiresIn: '1d'
            });

        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000
        });

        res.json({
            message: "Login successfully"
        });


    } catch (err) {
        
        console.log("Error",err);
        return res.status(401).json({
            message: "It throws error",
        });
    }
}

//logout
async function logout(req, res) {
    try {
        res.clearCookie('token');

        res.json({
            message: "Logged out"
        })
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