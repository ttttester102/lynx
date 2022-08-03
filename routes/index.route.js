var express = require("express");
var router = express.Router();
var productRouter = require("./product.route");

router.use("/product", productRouter);

module.exports = router;