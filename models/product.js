const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const productSchema= new Schema ({
    name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    }



});

const Product= mongoose.model('menu',productSchema);

module.exports=Product;