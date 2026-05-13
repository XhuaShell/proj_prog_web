import { publicMiddleware } from "./public.middleware.js";

export const authSessionMiddleware = (req, res, next) => {
  const role = req.session.user.role;

  if (role !== "customer" && role !== "admin" && role !== "seller") {
    return res.redirect("/error/session");
  }

  next();
};

// CUSTOMER
export const authCustomerMiddleware = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect("/error/session");
  }

  // validar rol
  if (req.session.user.role !== "customer") {
    return res.status(403).send("No autorizado");
  }

  next();
};

// SELLER
export const authSellerMiddleware = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect("/error/session");
  }

  // validar rol
  if (req.session.user.role !== "seller") {
    return res.status(403).send("No autorizado");
  }

  next();
};

// ADMIN
export const authAdminMiddleware = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect("/error/session");
  }

  // validar rol
  if (req.session.user.role !== "admin") {
    return res.status(403).send("No autorizado");
  }

  next();
};
