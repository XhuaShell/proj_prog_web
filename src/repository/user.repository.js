import { DB } from "../database/db.js";
import { usersTable } from "../database/schema/user.schema.js";
import { eq } from "drizzle-orm";

export const logUser = async function (email, password) {
  try {
    const user = DB.select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (user.email) throw new Error("El usuario no existe");

    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};
