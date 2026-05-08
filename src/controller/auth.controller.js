import { getPanel } from "../model/panel.js";

export const loginUserAuth = async function (req, res) {
  console.log(req.body);
  const { mail, password } = req.body;

  try {
    if (!mail || !password)
      throw new Error("El mail y la contraseña son obligatorios");

    if (mail === "customer@mail.com" && password === "123456") {
      req.session.user = { username: "Customer", email: "customer@mail.com" };
      req.session.panelInfo = getPanel("customer");
      res.render("panel/customerPanel", {
        user: req.session.user,
        panelInfo: req.session.panelInfo,
      });
      return;
    }

    if (mail === "seller@mail.com" && password === "123456") {
      req.session.user = { username: "Seller", email: "seller@mail.com" };
      req.session.panelInfo = getPanel("seller");
      res.render("panel/sellerPanel", {
        user: req.session.user,
        panelInfo: req.session.panelInfo,
      });
      return;
    }

    if (mail === "admin@mail.com" && password === "123456") {
      req.session.user = { username: "Admin", email: "admin@mail.com" };
      req.session.panelInfo = getPanel("admin");

      console.log(req.session.panelInfo);

      res.render("panel/adminPanel", {
        user: req.session.user,
        panelInfo: req.session.panelInfo,
      });
      return;
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ mensaje: error.message });
  }
};
