export class Brand {
  constructor(name, nif, id) {
    if (!name || !nif) {
      throw new Error("El nombre y el nif son obligatorios");
    }

    this.id = id;
    this.name = name;
    this.nif = nif;
  }
}
