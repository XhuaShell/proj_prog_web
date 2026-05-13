import { DB } from "../database/db.js";
import { brandsTable } from "../database/schema/brands.schema.js";
import { eq } from "drizzle-orm";

export async function getAll() {
  return await DB.select({
    id_brand: brandsTable.id_brand,
    name: brandsTable.name,
    nif: brandsTable.nif,
  }).from(brandsTable);
}

export async function getById(id_brand) {
  const result = await DB.select({
    id_brand: brandsTable.id_brand,
    name: brandsTable.name,
    nif: brandsTable.nif,
  })
    .from(brandsTable)
    .where(eq(brandsTable.id_brand, id_brand));

  return result[0];
}

export async function create(brand) {
  return await DB.insert(brandsTable).values({
    name: brand.name,
    nif: brand.nif,
  });
}

export async function deleteById(id_brand) {
  return await DB.delete(brandsTable).where(eq(brandsTable.id_brand, id_brand));
}

export async function updateById(id_brand, brand) {
  return await DB.update(brandsTable)
    .set({
      name: brand.name,
      nif: brand.nif,
    })
    .where(eq(brandsTable.id_brand, id_brand));
}
