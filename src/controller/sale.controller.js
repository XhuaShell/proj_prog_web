import { Sale } from "../model/sale.model.js";

import * as SaleService
from "../service/sale.service.js";

export const getSalesTable = async (
  req,
  res
) => {

  const sales =
    await SaleService.getAllSales();

  res.render("sales/sale_table", {
    sales,
    panelInfo: req.session.panelInfo,
    user: req.session.user,
  });

};

export const getSaleForm = async (
  req,
  res
) => {

  res.render("sales/sale_form", {
    panelInfo: req.session.panelInfo,
    user: req.session.user,
  });

};

export const registerSale = async (
  req,
  res
) => {

  try {

    const {
      car_name,
      payment_type,
      total_amount,
    } = req.body;

    const sale = new Sale(
      car_name,
      payment_type,
      total_amount,
      req.session.user.id
    );

    await SaleService.registerSale(
      sale
    );

    res.redirect(
      "/panel/seller/sales"
    );

  } catch (error) {

    console.log(error);

    res.status(500).send(
      error.message
    );

  }

};