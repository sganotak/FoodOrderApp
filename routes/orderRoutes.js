const express = require('express');
const router= express.Router();
const orderController= require('../controllers/orderController');

//const urlencodedParser= bodyParser.urlencoded({extended: false});


router.post('/', orderController.createOrder);

router.get('/thankyou',orderController.getThankYouPage);

router.get('/ordercancelled',orderController.getOrderCancelledPage);

router.delete('/:id', orderController.deleteOrder);


  router.get('/:id',orderController.getOrder);

  

  router.post('/confirm', orderController.confirmOrder);

  module.exports= router;