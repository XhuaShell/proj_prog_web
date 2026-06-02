export class Sale {
  constructor(
    car_name,
    payment_type,
    total_amount,
    id_seller
  ) {

    if (
      !car_name ||
      !payment_type ||
      !total_amount
    ) {
      throw new Error(
        "Todos los campos son obligatorios"
      );
    }

    this.car_name = car_name;
    this.payment_type = payment_type;
    this.total_amount = total_amount;
    this.id_seller = id_seller;
  }
}