import { pgTable, varchar, uuid } from "drizzle-orm/pg-core";

export const brandsTable = pgTable("brands", {
  id_brand: uuid("id_brand").defaultRandom().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  nif: varchar("nif", { length: 30 }).notNull().unique(),
});
