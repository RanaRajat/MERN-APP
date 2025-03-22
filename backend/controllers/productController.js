import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

const getProductById = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
        res.status(404).json({ message: "Product not found" }); 
        return;
    }

    res.json(product);
});

export { getProductById, getProducts };
