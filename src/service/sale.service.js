import {
  getAll,
  create,
} from "../repository/sale.repository.js";

export const getAllSales = async () =>
  getAll();

export const registerSale = async (
  sale
) => create(sale);