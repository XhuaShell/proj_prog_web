import { Router } from "express";
import { authAdminMiddleware } from "../middleware/auth.middleware.js";
import { getAdminPanel } from "../controller/panel.controller.js";

import {
  getModelFormAdd,
  getModelTable,
} from "../controller/model.controller.js";

import {
  deleteBrand,
  getBrandFormAdd,
  getBrandFormEdit,
  getBrandsTable,
  registerBrand,
  updateBrand,
} from "../controller/brands.controller.js";

export const AdminRouter = Router();

// Panel
AdminRouter.get("/panel/admin", authAdminMiddleware, getAdminPanel);

// Modelos: edición y visualización
AdminRouter.get("/panel/admin/model", authAdminMiddleware, getModelTable);
AdminRouter.get(
  "/panel/admin/model/form",
  authAdminMiddleware,
  getModelFormAdd,
);

// Manejador de Marcas
AdminRouter.get("/panel/admin/brands", authAdminMiddleware, getBrandsTable);
AdminRouter.get(
  "/panel/admin/brand/register",
  authAdminMiddleware,
  getBrandFormAdd,
);
AdminRouter.get(
  "/panel/admin/brand/edit/:id_brand",
  authAdminMiddleware,
  getBrandFormEdit,
);
AdminRouter.get(
  "/panel/admin/brand/delete/:id_brand",
  authAdminMiddleware,
  deleteBrand,
);
AdminRouter.post("/panel/admin/brand/register", authAdminMiddleware, registerBrand);
AdminRouter.post("/panel/admin/brand/update", authAdminMiddleware, updateBrand);

export default AdminRouter;
