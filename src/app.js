import CustomerService from "./services/customerService.js";
import DataControlService from "./services/dataControlService.js";
import EmployeeService from "./services/employeeService.js";
import UserService from "./services/userService.js";

let customerService = new CustomerService();
let employeeService = new EmployeeService();
let userService = new UserService();


let dataControlService = new DataControlService(userService,customerService,employeeService)
dataControlService.load()

console.log(userService.list())
console.log(employeeService.list())
console.log(customerService.list())