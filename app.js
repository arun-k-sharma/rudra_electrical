const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const cors = require('cors');

//user routes
const productRouter = require('./routes/product.route');
const bookingRouter = require('./routes/booking.route');
const galleryRouter = require('./routes/gallery.route');
const serviceRouter = require('./routes/service.route');

//admin routes
const adminRouter = require('./routes/admin/auth.route');
const dashboardRouter = require('./routes/admin/dashboard.route');
const adminProductRouter = require('./routes/admin/product.route');
const adminGalleryRouter = require('./routes/admin/gallery.route');
const adminBookingRouter = require('./routes/admin/booking.route');
const settingRouter = require('./routes/admin/settings.route');
const contactRouter = require('./routes/contact.route');


const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('client'));
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}))


//use this route on product for user--------
app.use('/products', productRouter);

app.use('/booking', bookingRouter);

app.use('/gallery', galleryRouter);

app.use('/services', serviceRouter);

app.use('/contact', contactRouter);


//make about feature in future----------------- |
// app.get('/about', (req, res) => {            |
//     res.render('website/about');             |
// });----------------------------------------- |

//admin route-------------
app.use('/admin', adminRouter);

app.use('/admin/dashboard', dashboardRouter);

app.use('/admin/products', adminProductRouter);

app.use('/admin/gallery', adminGalleryRouter);

app.use('/admin/bookings', adminBookingRouter);

app.use('/admin/settings', settingRouter);



app.get('/', (req, res) => {
    res.render('website/home');
})

//admin 404
app.use("/admin", (req, res) => {
    console.log('404 ', req.admin)
    res.status(404).render("admin/404", {
        pageTitle: "Page Not Found"
    });
});


//404 page
app.use((req, res) => {
    res.render('website/404');
});






module.exports = app;