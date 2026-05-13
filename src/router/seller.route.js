import { Router } from "express";
import { authSellerMiddleware } from "../middleware/auth.middleware.js";
import { getSellerPanel } from "../controller/panel.controller.js";

export const SellerRouter = Router();

// Panel
SellerRouter.get("/panel/seller", authSellerMiddleware, getSellerPanel);

export default SellerRouter;
