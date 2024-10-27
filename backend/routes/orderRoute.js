import express from "express";
import authUser from "../middleware/auth.js";
import { allOrders, placeOrder, placeOrderStripe, updateStatus, userOrders, verifyStripe } from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

// Admin routes
router.post("/list", adminAuth, allOrders);
router.post("/status", adminAuth, updateStatus)

// Payment routes
router.post("/place", authUser, placeOrder);
router.post("/stripe", authUser, placeOrderStripe);

// User routes
router.post("/userorders", authUser, userOrders);

// Verify Payment 
router.post("/verifyStripe", authUser, verifyStripe);

export default router;