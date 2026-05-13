export const getAdminPanel = async (req, res) => {
  res.render("panel/adminPanel");
};

export const getCustomerPanel = async (req, res) => {
  res.render("panel/customerPanel");
};

export const getSellerPanel = async (req, res) => {
  res.render("panel/sellerPanel");
};
