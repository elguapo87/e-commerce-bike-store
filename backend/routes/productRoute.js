import express from "express";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";
import { addProduct, productList, removeProduct, singleProduct } from "../controllers/productController.js";

const router = express.Router();

router.post("/add", adminAuth, upload.fields(
    [
        { name: "image1", maxCount: 1 },
        { name: "image2", maxCount: 2 },
        { name: "image3", maxCount: 2 },
        { name: "image4", maxCount: 2 },
    ]
), addProduct);

router.get("/list", productList);

router.post("/remove", adminAuth, removeProduct);

router.post("/single", singleProduct);

export default router;