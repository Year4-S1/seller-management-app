const Seller = require("../Models/seller-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");



const login = async (req, res) => {
    email = req.body.email;


    const existingUser = await Seller.findOne({ email })


    if(existingUser){
        const valPassword = await bcrypt.compare(req.body.password, existingUser.password);
        if (valPassword) {
            res.status(200).json({ message: "Login successfull" });
        } else {
            res.status(400).json({ error: "Please check email or password" });
        }
    } else {
        res.status(400).json({ message: "This email is not registered" });


    }
    
};

module.exports = {
  login
}