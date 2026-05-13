import { Router } from "express";
import { authCustomerMiddleware } from "../middleware/auth.middleware.js";
import { getCustomerPanel } from "../controller/panel.controller.js";

export const CustomerRouter = Router();

// Panel
CustomerRouter.get("/panel/customer", authCustomerMiddleware, getCustomerPanel);

export default CustomerRouter;
