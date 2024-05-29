const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb+srv://gurutejrabbigeri2001il:7u8d555ROWtlh4PB@cluster0.ab3yksv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB Atlas");
}).catch((err) => {
  console.error("Error connecting to MongoDB Atlas", err);
});