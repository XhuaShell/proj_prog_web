import * as SellerRepository from "../repository/seller.repository.js";
import { Seller } from "../model/user/seller.model.js";

// OBTENER TODOS
export const getAllSellers = async () => {

  return await SellerRepository.getAllSellers();

};

// REGISTRAR
export const registerSeller = async (
  firstname,
  lastname,
  email,
  password
) => {

  const seller = new Seller(
    firstname,
    lastname,
    email,
    password
  );

  return await SellerRepository.createSeller(seller);

};

// ELIMINAR
export const deleteSeller = async (id_user) => {

  return await SellerRepository.deleteSeller(id_user);

};