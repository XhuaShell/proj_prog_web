import {
  integer,
  numeric,
  pgTable,
  serial,
  text,
  varchar,
} from "drizzle-orm/pg-core";

export const technicalSpecsTable = pgTable("technical_specs", {
  id_spec: serial("id_spec").primaryKey(),

  engine: varchar("engine", {
    length: 100,
  }).notNull(),

  displacement: integer("displacement").notNull(),

  fuel_type: varchar("fuel_type", {
    length: 50,
  }).notNull(),

  max_torque: numeric("max_torque", {
    precision: 10,
    scale: 2,
  }).notNull(),

  max_power: numeric("max_power", {
    precision: 10,
    scale: 2,
  }).notNull(),

  transmission: varchar("transmission", {
    length: 50,
  }).notNull(),

  rear_suspension: text("rear_suspension"),

  front_suspension: text("front_suspension"),

  total_height: numeric("total_height", {
    precision: 10,
    scale: 2,
  }),

  total_width: numeric("total_width", {
    precision: 10,
    scale: 2,
  }),

  total_length: numeric("total_length", {
    precision: 10,
    scale: 2,
  }),
});
