const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.route("/").get(productController.getAllProducts);
router.route("/find").get(productController.filterProductBy);
router.route("/:id").get(productController.geProductById);
router.route("/").post(productController.createProduct);
router.route("/:id").put(productController.updateProduct);
module.exports = router;
