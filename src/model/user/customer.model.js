export class Customer {
  constructor(firstname, lastname, email, password) {
    if (!firstname || !lastname || !email || !password ) {
      throw new Error("Todos los campos son obligatorios");
    }

    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
  }
}
