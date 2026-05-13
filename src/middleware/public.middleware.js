export const publicMiddleware = async (req, res, next) => {
  
  res.locals.user = req.session.user || null;
  res.locals.panelInfo = req.session.panelInfo || null;
  
  next();
};
