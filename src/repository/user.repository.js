import { db } from "../database/db.js";
import { users } from "../database/schema/index.js";

export async function findUserByEmail(email) {
  return await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, email),
  });
}
