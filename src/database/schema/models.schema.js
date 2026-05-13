import {
  integer,
  numeric,
  pgTable,
  uuid,
  text,
  varchar,
} from "drizzle-orm/pg-core";

import { brandsTable } from "./brands.schema.js";
import { technicalSpecsTable } from "./technicalSpecs.schema.js";

export const modelsTable = pgTable("models", {
  id_model: uuid("id_model").defaultRandom().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  description: text("description"),
  version: varchar("version", { length: 50 }),
  year: integer("year").notNull(),
  price: numeric("price", { precision: 12, scale: 2 }).notNull(),

  id_spec: integer("id_spec")
    .references(() => technicalSpecsTable.id_spec)
    .notNull(),

  id_brand: uuid("id_brand")
    .references(() => brandsTable.id_brand)
    .notNull(),
});
