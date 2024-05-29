const Order = require("../models/orderSchema");
const { decreaseProductStocks } = require("../services/productServices");

// Add Order
const addOrder = async (req, res) => {
  try {
    let data = Order(req.body);
    let result = await data.save({ writeConcern: { w: "majority" } });
    console.log(result);
    await decreaseProductStocks(data.productId, data.orderQty);
    res
      .status(200)
      .send({ message: `Order for ${data.name} successfully received` });
  } catch (error) {
    res.status(500).send("Something went wrong!");
    console.log(error);
  }
};

// Retrieve Order by Seller ID
const showOrdersBySeller = async (req, res) => {
  try {
    let data = await Order.find({ sellerId: req.params.sellerId });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Something went wrong!");
    console.log(error);
  }
};

const showOrdersByUser = async (req, res) => {
  try {
    let data = await Order.find({ customerEmail : req.params.userEmail });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Something went wrong!");
    console.log(error);
  }
};

const delivery = async (req,res) => {
  //console.log(req.params.orderId)
  try{
    let data = await Order.findByIdAndUpdate(req.params.orderId,
      {
        isShipped : req.params.isShipped
      }
  );
  
  console.log("data",data)
  res.status(200).send({
    message: "Order Updated Successfully",
    data : data
  });
  }catch(error){
    res.status(500).send("Something went wrong!");
    console.log(error);
  }
}

module.exports = {
  addOrder,
  showOrdersBySeller,
  delivery,
  showOrdersByUser
};
