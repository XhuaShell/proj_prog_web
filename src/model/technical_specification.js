export class Customer {
  constructor(
    id_spec,
    engine,
    displacement,
    fuel_type,
    max_torque,
    max_power,
    transmission,
    rear_suspension,
    front_suspension,
    total_height,
    total_width,
    total_length,
  ) {
    if (
      !id_spec ||
      !engine ||
      !displacement ||
      !fuel_type ||
      !max_torque ||
      !max_power ||
      !transmission
    ) {
      throw new Error("Todos los campos son obligatorios");
    }

    this.id_spec = id_spec;
    this.engine = engine;
    this.displacement = displacement;
    this.fuel_type = fuel_type;
    this.max_torque = max_torque;
    this.max_power = max_power;
    this.transmission = transmission;
    this.rear_suspension = rear_suspension;
    this.front_suspension = front_suspension;
    this.total_height = total_height;
    this.total_width = total_width;
    this.total_length = total_length;
  }
}
