const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const orderSchema= new Schema ({
    
    __id: mongoose.Schema.Types.ObjectId,
    
    products: [{
        productId: {type: mongoose.mongoose.Schema.Types.ObjectId, ref: 'menu', required: true},
        //productId: {type: 'String',required: true},

        quantity: { type: Number, required: true },
        _id: false

    }],


    totalprice: {
        type: Number,
        required: true,
        default: '0'
    },

    status: {
        type: String,
        required: true,
        default: 'Invalid'
    },


    customerName: {
        type: String,
        //required: true  
    },

    address: {
        type: String,
        //required: true  
    },

    telNumber: {
        type: String,
        //required: true  
    },

   

}, { timestamps: true });

orderSchema.methods.calcTotalPrice= function(arr1, arr2){
    //multiply arrays element by element
    mul=arr1.map((e, index) => e * arr2[index]);
    //sum arrays
    this.totalprice = mul.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);


}

orderSchema.methods.fillOrder= function(objectids, quantities){

    for (let i = 0; i < objectids.length; i++) {
        if (quantities[i]>0) {
        this.products.push({productId:objectids[i],quantity:quantities[i]});
        }
    }
    
}

const Order= mongoose.model('order',orderSchema);

module.exports=Order;