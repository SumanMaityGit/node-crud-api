const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

dotenv.config();

// connected to db
mongoose.connect(process.env.DB_CONNECT,{
    useNewUrlParser:true,useUnifiedTopology:true
})
.then( () => console.log("mongodb is connected") )
.catch ( err => console.log(err) )

// Import routes
const productRoutes = require("./routes/product");

// Middlewares
app.use(express.json());

// route Middlewares
app.use("/api/products", productRoutes);

app.listen(4000,()=>{
    console.log("on port 4000 !!!")
})