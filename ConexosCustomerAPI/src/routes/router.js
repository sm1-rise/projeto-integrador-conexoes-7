const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController.js");
const userController = require ("../controller/userController.js");
//ROTAS ORDER
router.get("/order", orderController.getAll);
router.get("/order/:id", orderController.getById);
router.post("/order", orderController.createOrder);
router.put("/order/:id", orderController.updateOrder);
router.delete("/order/:id", orderController.deleteOrder);

//ROTAS USER
router.get("/user", userController.getAll);
router.get("/user/:id", userController.getById);
router.post("/user", userController.createUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);


module.exports = router;