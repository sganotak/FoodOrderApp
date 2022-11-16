const express = require('express');
const mongoose = require('mongoose');
const productRoutes= require('./routes/productRoutes');
const orderRoutes= require('./routes/orderRoutes');
const controlPanelRoutes= require('./routes/controlPanelRoutes');
require('dotenv').config();


// express app
const app = express();

//database
const dbURI=process.env.DBURI;

mongoose.connect(dbURI).then((result)=>{app.listen(3000); console.log('connected to db')}).catch((err)=>console.log(err));

// listen for requests


// register view engine
app.set('view engine', 'ejs');
// Middleware;
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use((req,res,next)=>{
    console.log('request made');
    console.log('host: ',req.hostname);
    console.log('path: ',req.path);
    console.log('host: ',req.method);
    next();
});

app.get('/', (req, res) => {
    res.redirect('/menu');
});


  //product routes

  app.use('/menu', productRoutes);

  //order routes

  app.use('/order', orderRoutes);

  //control panel routes
  app.use('/controlpanel',controlPanelRoutes);

  

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});