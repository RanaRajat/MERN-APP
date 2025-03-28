import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";
import Order from "./models/orderModel.js";
import connectDb from "./config/db.config.js";

dotenv.config();

connectDb();

const importData = async()=>{
    try{
      await Order.deleteMany();
      await Product.deleteMany();
      await User.deleteMany();

      const createdUsers = await User.insertMany(users);
      const adminUser = createdUsers[0]._id;

      const sampleProducts = products.map((product) => ({
        ...product, user: adminUser
      }));
      await Product.insertMany(sampleProducts);
      console.log("data imported".green.inverse);
      process.exit();

    }
    catch(error){
      console.log(`error ${error}`.red.inverse);
      process.exit(1);
        
    }
}

const destroyData = async()=>{
    try{
      await Order.deleteMany();
      await Product.deleteMany();
      await User.deleteMany();

      console.log("data destroyed".green.inverse);
      process.exit();

    }
    catch(error){
      console.log(`error ${error}`.red.inverse);
      process.exit(1);
        
    }
}

if(process.argv[2]=="-d"){
    destroyData();
}
else{
    importData();
}



