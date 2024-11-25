const express = require("express");
const router = express.Router();
const orderControllers = require("../controllers/orderControllers");

router.post("/order", orderControllers.userOrder);
router.post("/myOrder", orderControllers.getOrderByUser);

module.exports = router;
