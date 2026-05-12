export class Customer {
  constructor(firstname, lastname, email, password, role) {
    if (!firstname || !lastname || !email || !password || !role ) {
      throw new Error("Todos los campos son obligatorios");
    }

    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
