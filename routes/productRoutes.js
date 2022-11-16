const express = require('express');
const productController = require('../controllers/productController');

const router= express.Router();



router.get('/',productController.getMenu);

router.post('/',productController.createProduct);


module.exports= router;