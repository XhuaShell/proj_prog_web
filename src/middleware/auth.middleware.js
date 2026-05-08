export const authSessionMiddleware = async function (req, res, next) {
  if ((req.session.user = null)) {
    res.redirect("/error/session");
    return;
  } 

  next();
};

export const authCustomerMiddleware = async function (req, res, next) {
  authSessionMiddleware(req, res, next);

  if (req.session == null) next();
};

export const authSellerMiddleware = async function (req, res, next) {
  authSessionMiddleware(req, res, next);

  next();
};

export const authAdminMiddleware = async function (req, res, next) {
  authSessionMiddleware(req, res, next);

  next();
};
