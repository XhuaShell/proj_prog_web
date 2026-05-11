import * as UserRepository from "../repository/user.repository.js";

export const validatedUserPassword = async (mail, password) => {
  const user = await UserRepository.logUser(mail, password);

  if (!user) throw new Error();


  
  return user[0];
};
