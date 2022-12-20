const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const ImportData = require("./dataImport");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const adminRoute = require("./routes/admin");





dotenv.config();



// Connet mongo user
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to mongodb...");
});
app.use(cors());
app.use(cookieParser());
app.use(express.json());



// import products
app.use("/api/import", ImportData);


//get products
app.use("/api/products", productRoutes);


//get orders
app.use("/api/orders", orderRoutes);

// get blog



//ROUTES
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);


// Admin
app.use("/admin/auth", adminRoute);


// Delete product
app.use("/api/delete", productRoutes);

//update
app.use("/api/update", productRoutes)









const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}...`);
});


