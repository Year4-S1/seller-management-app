const mongoose = require("mongoose")

const SellerSchema =  new mongoose.Schema({
    email:{type:String, required:true, trim:true},
    firstName:{type:String, require: true, trim:true},
    lastName:{type:String, require: true, trim:true},
    phoneNumber:{type:String, require: true, trim:true},
    password:{type:String, require: true, trim:true},
    confirmPassword:{type:String, require: true, trim:true},

});

const Seller = mongoose.model("seller", SellerSchema);
module.exports = Seller;