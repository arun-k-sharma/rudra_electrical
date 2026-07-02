// GET  /admin/settings
const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');


router.get('/', auth, (req, res) => {
    // Render the settings page with the current business information
    res.render('admin/setting', {
        admin: req.admin, // Assuming you have a middleware that sets req.admin,
        currentPage: 'settings' // Pass the current
    });
});

module.exports = router;


// Function: showSettings()

// Description: Display business settings.

// POST /admin/settings

// Function: updateSettings()

// Description: Save changes to business information.