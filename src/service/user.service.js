import {
  getUserById,
  updateUserById
} from "../repository/user.repository.js";

export const getUser = async (id_user) =>
  getUserById(id_user);

export const updateUser = async (
  id_user,
  firstname,
  lastname,
  address,
  ph_number
) =>
  updateUserById(
    id_user,
    firstname,
    lastname,
    address,
    ph_number
  );