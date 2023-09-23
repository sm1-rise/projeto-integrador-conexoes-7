const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController.js");

//ROTAS ORDER
router.get("/order", orderController.getAll);
router.get("/order/:id", orderController.getById);
router.post("/order", orderController.createOrder);
router.put("/order/:id", orderController.updateOrder);
router.delete("/order/:id", orderController.deleteOrder);

module.exports = router;