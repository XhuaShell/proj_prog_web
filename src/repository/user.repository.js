import { DB } from "../database/db.js";
import { usersTable } from "../database/schema/user.schema.js";
import { eq } from "drizzle-orm";

export const logUser = async function (email) {

  try {

    const user = await DB.select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (user.length === 0) {
      throw new Error("El usuario no existe");
    }

    return user;

  } catch (error) {

    console.log(error);
    return null;

  }

};

export const getUserById = async function (id_user) {

  const user = await DB.select()
    .from(usersTable)
    .where(eq(usersTable.id_user, id_user));

  return user[0];

};

export const updateUserById = async function (
  id_user,
  firstname,
  lastname,
  address,
  ph_number
) {

  return await DB.update(usersTable)
    .set({
      firstname,
      lastname,
      address,
      ph_number
    })
    .where(eq(usersTable.id_user, id_user));

};
