import { getPanel } from "../model/panel.js";
import * as CustomerService from "../service/customer.service.js";
import * as AuthService from "../service/auth.service.js";

export const getLogin = async (req, res) => res.render("login");

export const loginUserAuth = async function (req, res) {

  console.log(req.body);

  const { mail, password } = req.body;

  try {

    if (!mail || !password) {
      throw new Error("El mail y la contraseña son obligatorios");
    }

    // validar usuario
    const user = await AuthService.validatedUserPassword(
      mail,
      password
    );

    console.log(user);

    // guardar usuario en sesión
    req.session.user = {
      id: user.id_user,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      role: user.role,
    };

    // información del panel
    req.session.panelInfo = getPanel(user.role);

    // CUSTOMER
    if (user.role === "customer") {

      return res.redirect("/panel/customer");

    }

    // SELLER
    if (user.role === "seller") {

      return res.redirect("/panel/seller");

    }

    // ADMIN
    if (user.role === "admin") {

      return res.redirect("/panel/admin");

    }

  } catch (error) {

    console.log(error);

    return res.status(400).json({
      mensaje: error.message
    });

  }

};

export const getRegister = async (req, res) => res.render("register");

export const registerAuth = async (req, res, next) => {

  const { firstname, lastname, email, password } = req.body;

  console.log(firstname, lastname, email, password);

  await CustomerService.registerCustomer(
    firstname,
    lastname,
    email,
    password
  );

  res.redirect("/register");

};

export const logoutAuth = async (req, res, next) => {

  req.session.destroy(() => {
    res.redirect("/login");
  });

};