const Product = require('../models/product');

const getMenu =(req,res)=>{
    Product.aggregate([
        
        { 
            
            $group:
            { 
                _id: "$category",
                totalProducts: { $push: "$$ROOT"  }
            }
        },
        {
            $addFields:{
        idx: { $indexOfArray: [  [ "Appetizers", "Main Dishes", "Desserts","Drinks"], "$_id" ] }}},
        
        { $sort: { idx: 1 } },
    ])
        .then(result => {
            res.render('menu', { products: result, title: 'Menu & Order' });
            console.log(result);
        })
        .catch(error => {
            console.log(error)
        })


}

const createProduct = (req,res)=>{
    const product= new Product(req.body);

    product.save()
    .then((result)=> {res.redirect('/controlpanel/editmenu');
})
    .catch(err => console.log(err))
    


}

const getCreate = (req,res)=>{
    
    res.render('create', { title: 'Create a new product' });

}

const postCreate = (req,res)=>{
    
    console.log(req.body);

}

const editMenu =(req,res)=>{
    Product.aggregate([
        
        { 
            
            $group:
            { 
                _id: "$category",
                totalProducts: { $push: "$$ROOT"  }
            }
        },
        {
            $addFields:{
        idx: { $indexOfArray: [  [ "Appetizers", "Main Dishes", "Desserts","Drinks"], "$_id" ] }}},
        
        { $sort: { idx: 1 } },
    ])
        .then(result => {
            res.render('editmenu', { products: result, title: 'Edit Menu' });
            console.log(result);
        })
        .catch(error => {
            console.log(error)
        })


}

const getProductbyId = (req,res)=>{
    const id = req.params.id;
    Product.findById(id)
      .then(result => {
        console.log(result);
        res.render('editproduct', { product: result, title: 'Edit Product' });
    })
      .catch(err => {
      console.log(err);
    })
    }
  
  

const deleteProduct = (req,res)=>{
    const id = req.params.id;
    Product.findByIdAndDelete(id)
      .then(result => {
        res.json({redirect: '..'})
      })
      .catch(err => {
        console.log(err);
      })

}

const updateProduct = (req,res)=>{
    const id = req.params.id;
    Product.findByIdAndUpdate(req.body.productid,{
        name: req.body.productname,
        category: req.body.productcategory,
        price: req.body.productprice,
       })
      .then(result => {
        res.redirect('..');
      })
      .catch(err => {
        console.log(err);
      })

}


module.exports = {
    getMenu,
    createProduct,
    getCreate,
    postCreate,
    editMenu,
    deleteProduct,
    getProductbyId,
    updateProduct
}