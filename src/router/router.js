import { Router } from "express";
import PublicRouter from "./public.route.js";
import ErrorRouter from "./error.route.js";
import AdminRouter from "./admin.route.js";
import CustomerRouter from "./customer.route.js";
import SellerRouter from "./seller.route.js";
import {
  getPersonalAccount,
  updatePersonalAccount
} from "../controller/user.controller.js";

import {
  authSessionMiddleware
} from "../middleware/auth.middleware.js";

import {
  authAdminMiddleware,
  authSellerMiddleware,
  authCustomerMiddleware,
} from "../middleware/auth.middleware.js";

import { publicMiddleware } from "../middleware/public.middleware.js";

const MainRouter = Router();

MainRouter.use(publicMiddleware);

MainRouter.use(PublicRouter);
MainRouter.use("/error", ErrorRouter);

MainRouter.use(AdminRouter);
MainRouter.use(CustomerRouter);
MainRouter.use(SellerRouter);

// PERSONAL ACCOUNT
MainRouter.get(
  "/panel/account",
  authSessionMiddleware,
  getPersonalAccount
);

MainRouter.post(
  "/panel/account/update",
  authSessionMiddleware,
  updatePersonalAccount
);

export default MainRouter;
