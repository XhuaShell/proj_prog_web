import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id_user: uuid("id_user").defaultRandom().primaryKey(),
  firstname: varchar("firstname", { length: 100 }).notNull(),
  lastname: varchar("lastname", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: text("password").notNull(),
  address: text("address"),
  ph_number: varchar("ph_number", { length: 10 }).unique(),
});
