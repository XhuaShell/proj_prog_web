import * as UserRepository from "../repository/user.repository.js";

export const validatedUserPassword = async (mail, password) => {
  const user = await UserRepository.logUser(mail);

    if (!user) {
    throw new Error("Usuario no encontrado");
  }

  // select devuelve array
  const userData = user[0];

  // validar contraseña
  if (userData.password !== password) {
    throw new Error("Contraseña incorrecta");
  }

  return userData;
};
