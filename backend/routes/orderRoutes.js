const express = require("express");
const router = express.Router();
const orderControllers = require("../controllers/orderControllers");

router.route("/").post(orderControllers.createOrder);
router.route("/").get(orderControllers.getAllOrder);
router.route("/user/:id").get(orderControllers.getOrderByUserId);
router.route("/find/:id").get(orderControllers.getOrderById);

module.exports = router;
