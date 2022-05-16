const Seller = require("../Models/seller-model")

const registerSeller = async(req, res) => {
    if(req.body){
        const seller = new Seller(req.body);

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