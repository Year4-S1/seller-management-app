const express = require("express");
const router = express.Router();

const  registerSellerController = require('../Services/register-seller-service')
const  login = require('../Services/login-service');
const updateSeller = require('../Services/update-seller-service');

module.exports = function(){
    router.post("/register", registerSellerController.registerSeller);
    router.post("/login",login.login );
    router.patch("/update/:id",updateSeller.updateSeller );
    return router;
}