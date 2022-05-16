const Seller = require("../Models/seller-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");



const registerSeller = async (req, res) => {
  if (req.body) {

    email = req.body.email;


    const existingUser = await Seller.findOne({ email })

    const seller = new Seller(req.body);

    if (existingUser) {
      res.status(400).json({ message: "This email is already registered" });

    }


    const salt = await bcrypt.genSalt(10);
    seller.password = await bcrypt.hash(seller.password, salt);


    await seller
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

module.exports = {
  registerSeller
}