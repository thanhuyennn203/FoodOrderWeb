const orderModel = require("../models/orderModels");

async function userOrder(req, res) {
  try {
    const { userId, amount, orderInfo, orderItems } = req.body;

    //shipping = 0; shipped = 1;
    const status = "Shipping";
    const now = new Date();
    const orderDate = now.toISOString().slice(0, 19).replace("T", " ");

    if (userId != null && userId != undefined) {
      const result = await orderModel.createUserOrder([
        orderInfo.fullname,
        orderInfo.phone,
        orderInfo.address,
        orderInfo.note,
        orderDate,
        amount,
        status,
        userId,
      ]);

      if (!result) {
        console.log("Failed to insert order:", result);
        return res
          .status(400)
          .json({ sucess: false, message: "Failed to create order" });
      }

      const orderId = result;

      //create order detail
      const orderDetail = orderModel.createOrderDetail(orderId, orderItems);

      console.log("Order placed successfully:", result);
      return res
        .status(200)
        .json({ sucess: true, message: "Created order successfully" });
    }
  } catch (err) {
    console.error("Error in userOrder:", err);
    res.status(500).json({ sucess: false, message: "Failed to order", err });
  }
}

async function getOrderByUser(req, res) {
  try {
    const { user } = req.body;

    const getOrder = await orderModel.selectOrderByUserId(user);

    if (getOrder.length === 0) {
      return res.json({
        sucess: false,
        message: "You haven't ordered anything.",
      });
    } else {
      const listOrderPromises = getOrder.map(async (order) => {
        let eachOrder = order;
        const orderDetail = await orderModel.selectOrderDetail(order.order_id);
        eachOrder["items"] = orderDetail;
        console.log(eachOrder);
        return eachOrder;
      });

      const listOrder = await Promise.all(listOrderPromises);

      return res.status(200).json(listOrder); // Trả về listOrder sau khi hoàn thành
    }
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to get order." });
  }
}

module.exports = { userOrder, getOrderByUser };
