const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },

    produtctDescription: { 
        type: String
    },

    produtctPrice: {
        type: Number,
        required: true
    },

    productQuantity: {
        type: Number,
        require: true
    },

    productImage: {
        type: String
    },

    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("Product", Schema)