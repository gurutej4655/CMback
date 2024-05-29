const express = require('express');

const aiController = require('./../controllers/aiController')
const cartController = require('./../controllers/cartController')
const faqController = require('../controllers/faqController');
const graphController = require('../controllers/graphController')
const orderController = require('../controllers/orderController');
//const otpController = require('../controllers/otpController');
const productController = require('../controllers/productController')
const reviewController = require('../controllers/reviewController');
const sellerController = require("../controllers/sellerController");
// const verifyOTP = require("../middlewares/verifyOTP");
const userController = require('../controllers/userController');

const router = express.Router();

// SignUp
// router.post("/signup", verifyOTP, userController.signup);
router.post("/user/signup", userController.signup);
// Login
router.post("/user/login", userController.login);
// Delete User Account
router.delete("/user/deleteUser/:userId", userController.deleteUserAccount);

// SignUp
// router.post("/signup", verifyOTP, sellerController.signup);
router.post("/seller/signup", sellerController.signup);
// Login
router.post("/seller/login", sellerController.login);
// Delete Seller Account
router.delete("/seller/deleteSeller/:sellerId", sellerController.deleteSellerAccount);
router.get("/seller/:sellerId",sellerController.getSellerDetails)

// Add Review
router.post("/review/add", reviewController.addReview);
// Get Paginated Review
router.get("/review/get", reviewController.getPaginatedReview);
// Get Review
router.get("/review/:productid", reviewController.getReview);

// Add Product
router.post("/product/addProduct", productController.addProduct);
// Get Product Data By Category
router.get("/product/getProductDataByCategory/:category", productController.getProductDataByCategory);
// Get Seller Dashboard Data
router.get("/product/getProductData/:sellerId", productController.getProductDataBySellerId);
// Get Product Data By Id
router.get("/product/getProductDataById/:key", productController.getProductDataById);
// Get Product Stocks By Id
router.get("/product/getProductStocksById/:productId", productController.getProductStocksById);
// Delete Product
router.delete("/product/delete/:productId", productController.deleteProduct);
// Update Product
router.put("/product/update/:productId", productController.updateProduct);

// Generate OTP
//router.post("/generate", otpController.generateOTP);

// Add Order Item
router.post("/order/add", orderController.addOrder);
// Retrieve Order Item according to Seller Id
router.get("/order/get/:sellerId", orderController.showOrdersBySeller);
router.get("/order/getuserorder/:userEmail", orderController.showOrdersByUser);
router.get("/order/:orderId/:isShipped",orderController.delivery)

// Get Graph Data
router.get("/graph/visualize/:sellerId", graphController.getGraphData);

// Add FAQ
router.post("/faq/add", faqController.addFAQ);
// Show Paginated FAQ by Product
router.get("/faq/showbyproduct", faqController.showFAQsbyProduct);
// Show Paginated FAQ by Seller
router.get("/faq/showbyseller", faqController.showFAQsbySeller);
// Answering the FAQ
router.put("/faq/ansfaq/:faqId", faqController.ansFAQ); 

// Add Cart Item
router.post("/cart/add", cartController.addCartItem);
// Get Cart Item
router.get("/cart/:userEmail", cartController.showCartItem);
// Delete Cart Item
router.delete("/cart/delete/:userEmail", cartController.deleteCartItem);
// Increase Product Quantity in Cart
router.post("/cart/increase/:userId/:productId", cartController.increaseQty);
// Decreae Product Quantity in Cart
router.post("/cart/decrease/:userId/:productId", cartController.decreaseQty);

// Predict Crops
router.post("/ai/crops", aiController.predictCrops);

module.exports = router