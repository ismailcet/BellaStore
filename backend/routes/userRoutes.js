const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.route("/").get(userController.getAllUsers);
router.route("/find/:id").get(userController.getUserById);
router.route("/:id").put(userController.updateUser);
router.route("/order/:id").get(userController.orderByUser);

module.exports = router;
