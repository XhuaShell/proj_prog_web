import { db } from "../../database/db.js";
import { usersTable } from "../../database/schema/user.schema.js";
import { eq } from "drizzle-orm";

export async function findByEmail(email) {
  const result = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  return result[0];
}

export async function create(customer) {
  return await db.insert(usersTable).values(customer);
}