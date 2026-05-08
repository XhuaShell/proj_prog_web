export const publicMiddleware = async (req, res, next) => {
  console.log("LOG");
  next();
};
