import * as UserService from "../service/user.service.js";

export const getPersonalAccount = async (req, res) => {

  const user = await UserService.getUser(
    req.session.user.id
  );

  res.render("account/account_form", {
    user,
    panelInfo: req.session.panelInfo
  });

};

export const updatePersonalAccount = async (
  req,
  res
) => {

  const {
    firstname,
    lastname,
    address,
    ph_number
  } = req.body;

  await UserService.updateUser(
    req.session.user.id,
    firstname,
    lastname,
    address,
    ph_number
  );

  res.redirect("/panel/account");

};