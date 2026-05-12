import { DB } from "../database/db.js";
import { usersTable } from "../database/schema/user.schema.js";
import { eq } from "drizzle-orm";

export async function findByEmail(email) {
  const result = await DB.select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  return result[0];
}

export async function create(customer) {
  return DB.insert(usersTable).values({
    firstname: customer.firstname,
    lastname: customer.lastname,
    password: customer.password,
    email: customer.email,
    role: customer.role,
  });
}
