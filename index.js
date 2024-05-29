require("./config/connectDB.js");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const router = require('./routes/index.js')

// const user = require("./routes/user");
// const seller = require("./routes/seller");
// const product = require("./routes/product");
// const review = require("./routes/review");
// const cart = require("./routes/cart");
// const otp = require("./routes/otp");
// const order = require("./routes/order");
// const faq = require("./routes/faq");
// const graph = require("./routes/graph.js")
// const ai = require("./routes/ai.js")

const PORT = 8080;
const app = express();

app.use(cors());
app.use(express.json());

//setupWebSocket(io);
app.use("/",router)

// app.use("/user", user);
// app.use("/seller", seller);
// app.use("/product", product);
// app.use("/review", review);
// app.use("/cart", cart);
// app.use("/otp", otp);
// app.use("/order", order);
// app.use("/faq", faq);
// app.use("/graph", graph);
// app.use("/ai", ai);


app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
