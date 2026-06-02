import { DB } from "../database/db.js";
import { salesTable } from "../database/schema/sales.schema.js";

export async function getAll() {
  return await DB.select().from(salesTable);
}

export async function create(sale) {
  return await DB.insert(salesTable).values({
    car_name: sale.car_name,
    payment_type: sale.payment_type,
    total_amount: sale.total_amount,
    id_seller: sale.id_seller,
  });
}