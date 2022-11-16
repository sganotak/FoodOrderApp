const express = require('express');
const router= express.Router();
const orderController= require('../controllers/orderController');
const productController= require('../controllers/productController');

router.get('/editmenu', productController.editMenu);

router.get('/', orderController.getOrderIndex);

router.get('/vieworder/:id', orderController.getSingleOrder);

router.delete('/:id', orderController.adminDeleteOrder);

router.put('/accept/:id', orderController.adminAcceptOrder);

router.put('/cancel/:id', orderController.adminCancelOrder);

router.post('/editmenu/editproduct/:id',productController.updateProduct);

router.get('/editmenu/editproduct/:id',productController.getProductbyId);



router.delete('/delete/:id',productController.deleteProduct);

router.get('/editmenu/create',productController.getCreate);


router.post('/editmenu/create', productController.postCreate);



module.exports= router;