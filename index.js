const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

const sellerController = require("./src/Controllers/seller-controller")

const app = express();

app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))

app.use(cors());

app.get("/", (req, res) => {
    res.send("Seller Management Application")
} )

const CONNECTION_URL ='mongodb+srv://root:root@cluster0.efldi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true })
    .then(() => app.listen(PORT, () => console.log('Server running')))
    .catch((error) => console.log(error.message));



    app.use("/seller", sellerController());
