import { Router } from "express";

import { authSellerMiddleware } from "../middleware/auth.middleware.js";

import { getSellerPanel } from "../controller/panel.controller.js";

import {
  getSellersTable,
  getSellerForm,
  registerSeller,
  deleteSeller,
} from "../controller/seller.controller.js";

export const SellerRouter = Router();

// PANEL SELLER
SellerRouter.get(
  "/panel/seller",
  authSellerMiddleware,
  getSellerPanel
);

// TABLA SELLERS
SellerRouter.get(
  "/panel/admin/sellers",
  getSellersTable
);

// FORM REGISTER
SellerRouter.get(
  "/panel/admin/seller/register",
  getSellerForm
);

// REGISTER SELLER
SellerRouter.post(
  "/panel/admin/seller/register",
  registerSeller
);

// DELETE SELLER
SellerRouter.get(
  "/panel/admin/seller/delete/:id_user",
  deleteSeller
);

export default SellerRouter;
