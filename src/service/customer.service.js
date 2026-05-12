import { Customer } from "../model/user/customer.model.js";
import * as CustomerRepository from "../repository/customer.repository.js";


export const registerCustomer = async (firstname, lastname, email, password) => {
    try {
        const customer = new Customer(firstname, lastname, email, password,"customer");
        const user = await CustomerRepository.create(customer);
        return user;
    } catch (error) {
        console.log(error);
        return null;   
    }
}; 