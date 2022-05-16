const express = require("express");
const router = express.Router();

const  registerSellerController = require('../Services/register-seller-service')

module.exports = function(){
    router.post("/register", registerSellerController.registerSeller);
    return router;
}