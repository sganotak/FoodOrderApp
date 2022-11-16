const Product = require('../models/product');
const Order = require('../models/order');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');

const urlencodedParser= bodyParser.urlencoded({extended: false});

const createOrder = (req,res)=>{
    const { productId,price,quantity } = req.body;
    //pid= mongoose.Types.ObjectId(productId[0]);
    var pid2= productId.map(mongoose.Types.ObjectId);
    var q2= quantity.map(Number);
    console.log(pid2);
    const order= new Order();
    order.calcTotalPrice(price,quantity);
    order.fillOrder(pid2,q2);
    order.populate({ 
      path: 'products',
      populate: {
      path: 'productId'
      } 
   });
    order.save()
    .then(result=> {
      
    console.log(result);
    //const id=order._id;
   res.render('confirmorder', { order: result, title: 'Your Order' });
   }) 
   .catch(error => {
    console.log(error)
})

}

const deleteOrder = (req,res)=>{
    const id = req.params.id;
    Order.findByIdAndDelete(id)
      .then(result => {
        res.json({redirect: '/menu'})
      })
      .catch(err => {
        console.log(err);
      })

}

const getOrder = (req,res)=>{
  const id = req.params.id;
  const order= Order.findById(id)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      console.log(err);
    })

}

const confirmOrder = (req,res)=>{
    console.log(req.body.orderid);
    Order.findByIdAndUpdate(req.body.orderid,{
      customerName: req.body.customerName,
      address: req.body.address,
      telNumber: req.body.telNumber,
      status : 'Pending'
     })
     .then(result=>{}
      )
      .catch(err => {
        console.log(err);
      })

}

const adminAcceptOrder = (req,res)=>{
  const id= req.params.id;
  Order.findByIdAndUpdate(id,{
    status : 'Accepted'
   })
   .then(result=>{
    res.json({redirect: '/controlpanel'})
   }
    )
    .catch(err => {
      console.log(err);
    })

}

const adminCancelOrder = (req,res)=>{
  const id= req.params.id;
  Order.findByIdAndUpdate(id,{
    status : 'Cancelled'
   })
   .then(result=>{
    res.json({redirect: '/controlpanel'})
   }
    )
    .catch(err => {
      console.log(err);
    })

}

const adminDeleteOrder = (req, res)=> {
  const id = req.params.id;
  Order.findByIdAndDelete(id)
    .then(result => {
      res.json({redirect: '/controlpanel'})
    })
    .catch(err => {
      console.log(err);
    })
  }

  const getSingleOrder = (req,res)=>{
    console.log(req.params.id);
    const id = req.params.id;
    Order.findById(id)
      .populate({ 
        path: 'products',
        populate: {
        path: 'productId'
      } 
   })
      .then(result => {
        console.log(result);
        res.render('details', { order: result, title: 'Order Details' });
    })
      .catch(err => {
      console.log(err);
    })
    }




const getOrderIndex = (req,res)=>{
  Order.find()
  .then(result => {
    res.render('index', { orders: result, title: 'All Orders' });
    console.log(result);
  })
  .catch(error => {
    console.log(error)
})

}

const getThankYouPage = (req,res)=>{

  res.render('thankyou', { title: 'Order Complete' });
}

const getOrderCancelledPage = (req,res)=>{

  res.render('ordercancelled', { title: 'Order Cancelled' });
}

module.exports= {
    createOrder,
    deleteOrder,
    confirmOrder,
    getOrder,
    adminAcceptOrder,
    adminDeleteOrder,
    getSingleOrder,
    getOrderIndex,
    getThankYouPage,
    getOrderCancelledPage,
    adminCancelOrder
    

    
}