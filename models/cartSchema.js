const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    brand: {
        type: String, 
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true,
      },
    minQty: {
       type: Number,
       required: true,
    },
    pricePerUnit: {
        type: Number, 
        required: true
    },
    customerEmail: {
        type: String, 
        required: true
    },
    stocksLeft: {
        type: Number, 
        required: true
    },
    unit: {
        type: String, 
        required: true
    },
    currentPrice: {
        type: Number,
        required: true
    },
    sellerName: {
        type: String,
        required: true
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    sellerEmail: {
        type: String,
        required: true
    }
})

// Define a unique compound index on userId and productId
cartSchema.index({ userId: 1 })


module.exports = mongoose.model('carts',cartSchema);