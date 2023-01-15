const express = require("express");
const router = express.Router();
const orderControllers = require("../controllers/orderControllers");

router.route("/").post(orderControllers.createOrder);

module.exports = router;
