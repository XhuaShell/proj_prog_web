export class Customer {
  constructor(
    id_model,
    name,
    description,
    version,
    year,
    price,
    id_spec,
    id_brand,
  ) {
    if (
      !id_model ||
      !name ||
      !description ||
      !version ||
      !year ||
      !price ||
      !id_spec ||
      !id_brand
    ) {
      throw new Error("Todos los campos son obligatorios");
    }

    this.id_model = id_model;
    this.name = name;
    this.description = description;
    this.version = version;
    this.year = year;
    this.price = price;
    this.id_spec = id_spec;
    this.id_brand = id_brand;
  }
}
