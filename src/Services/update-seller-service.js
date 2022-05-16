const Seller = require("../Models/seller-model");


const updateSeller = async (req,res) => {
    const body = req.body;
    await Seller.findByIdAndUpdate(
        req.params.id,
        {
            $set:{
                firstName: body.firstName,
                lastName:body.lastName,
                phoneNumber:body.phoneNumber
            }

        },
        { upsert: true }

    )
    .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
}

module.exports ={
    updateSeller
}