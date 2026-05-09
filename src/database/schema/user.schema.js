import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id_user: uuid("id_user").defaultRandom().primaryKey(),
  username: varchar("username", { length: 100 }).notNull(),
  username: varchar("username", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  address: text("address").notNull(),
  ph_number: varchar("ph_number", { length: 10 }).notNull().unique(),
  hashed_password: text("hashed_password").notNull(),
});
