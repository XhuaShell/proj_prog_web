import { DB } from "../database/db.js";
import { usersTable } from "../database/schema/user.schema.js";
import { eq } from "drizzle-orm";

// OBTENER TODOS LOS SELLERS
export async function getAllSellers() {

  return await DB.select({
    id_user: usersTable.id_user,
    firstname: usersTable.firstname,
    lastname: usersTable.lastname,
    email: usersTable.email,
    role: usersTable.role,
  })
  .from(usersTable)
  .where(eq(usersTable.role, "seller"));

}

// CREAR SELLER
export async function createSeller(seller) {

  return await DB.insert(usersTable).values({
    firstname: seller.firstname,
    lastname: seller.lastname,
    email: seller.email,
    password: seller.password,
    role: "seller",
  });

}

// ELIMINAR SELLER
export async function deleteSeller(id_user) {

  return await DB.delete(usersTable)
    .where(eq(usersTable.id_user, id_user));

}