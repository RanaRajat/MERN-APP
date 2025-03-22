import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.config.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDb();
const port = process.env.PORT||5000;

const app = express();

app.get("/",(req,res)=>{
    res.send("Api is running");
});

app.use("/api/products",productRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})