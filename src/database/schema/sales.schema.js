import {
  pgTable,
  uuid,
  numeric,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const salesTable = pgTable("sales", {
  id_sale: uuid("id_sale").defaultRandom().primaryKey(),

  id_seller: uuid("id_seller").notNull(),

  car_name: varchar("car_name", { length: 100 }).notNull(),

  payment_type: varchar("payment_type", {
    length: 50,
  }).notNull(),

  total_amount: numeric("total_amount").notNull(),

  sale_date: timestamp("sale_date")
    .defaultNow()
    .notNull(),
});