const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const cors = require('cors');


const productRouter = require('./routes/product.route');

const adminRouter = require('./routes/admin/auth.route');
const dashboardRouter = require('./routes/admin/dashboard.route');
const adminProductRouter = require('./routes/admin/product.route');
const adminGalleryRouter = require('./routes/admin/gallery.route');


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


//use this route on product for user
app.use('/products', productRouter);

//admin route
app.use('/admin', adminRouter);

app.use('/admin/dashboard', dashboardRouter);

app.use('/admin/products', adminProductRouter);

app.use('/admin/gallery', adminGalleryRouter);




app.get('/', (req, res) => {
    res.render('website/home');
})








module.exports = app;