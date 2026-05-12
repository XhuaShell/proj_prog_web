import { Router } from "express";
import PublicRouter from "./public.route.js";
import ErrorRouter from "./error.route.js";

import {
  authAdminMiddleware,
  authSellerMiddleware,
  authCustomerMiddleware,
} from "../middleware/auth.middleware.js";

const MainRouter = Router();

MainRouter.use(PublicRouter);

MainRouter.use("/error", ErrorRouter);

// CUSTOMER
MainRouter.get(
  "/panel/customer",
  authCustomerMiddleware,
  (req, res) => {

    res.render("panel/customerPanel", {
      panelInfo: req.session.panelInfo,
      user: req.session.user,
    });

  }
);

// SELLER
MainRouter.get(
  "/panel/seller",
  authSellerMiddleware,
  (req, res) => {

    res.render("panel/sellerPanel", {
      panelInfo: req.session.panelInfo,
      user: req.session.user,
    });

  }
);

// ADMIN
MainRouter.get(
  "/panel/admin",
  authAdminMiddleware,
  (req, res) => {

    res.render("panel/adminPanel", {
      panelInfo: req.session.panelInfo,
      user: req.session.user,
    });

  }
);

export default MainRouter;
