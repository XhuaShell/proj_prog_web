import * as SellerService from "../service/seller.service.js";

// TABLA DE SELLERS
export const getSellersTable = async (req, res) => {

  const sellers = await SellerService.getAllSellers();

  res.render("sellers/seller_table", {
    sellers,
    panelInfo: req.session.panelInfo,
    user: req.session.user,
  });

};

// FORMULARIO
export const getSellerForm = async (req, res) => {

  res.render("sellers/seller_form", {
    panelInfo: req.session.panelInfo,
    user: req.session.user,
  });

};

// REGISTRAR SELLER
export const registerSeller = async (req, res) => {

  try {

    const {
      firstname,
      lastname,
      email,
      password,
    } = req.body;

    await SellerService.registerSeller(
      firstname,
      lastname,
      email,
      password
    );

    return res.redirect("/panel/admin/sellers");

  } catch (error) {

    console.log(error);

    return res.status(500).send("Internal server error");

  }

};

// ELIMINAR SELLER
export const deleteSeller = async (req, res) => {

  try {

    const { id_user } = req.params;

    await SellerService.deleteSeller(id_user);

    return res.redirect("/panel/admin/sellers");

  } catch (error) {

    console.log(error);

    return res.status(500).send("Internal server error");

  }

};