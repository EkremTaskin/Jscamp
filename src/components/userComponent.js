import { users } from "../data/users.js";
import User from "../models/user.js";
import { CustomerService } from "../services/customerService.js";
import { EmployeeService } from "../services/employeeService.js";
import { UserService } from "../services/userService.js"

let userService = new UserService();
let customerService = new CustomerService();
let employeeService = new EmployeeService();

console.log("User component yüklendi")
//userService.load()
console.log(customerService.customers)
//console.log(employeeService.list())
//console.log(userService.users)
//console.log(userService.errors)
//let user = new User(1, "Ekrem", "Taşkın", 17, 2004, "eko20042004@hotmail.com", 1232132);

//userService.add(user)
//userService.getById(1);
//userService.list();

//let customer = { id: 1, name: "Ekrem" }

//customer.lastName = "Taşkın"
//console.log(customer.lastName)