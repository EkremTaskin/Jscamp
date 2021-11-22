import { users } from "../data/users.js";
import { CustomerService } from "./customerService.js";
import { EmployeeService } from "./employeeService.js";
import DataError from "./dataError.js";

export default class UserService {
    constructor(loggerService) {
        this.users = []
        this.loggerService = loggerService
    }

    add(user) {
        this.users.push(user)
    }

    list() {
        return this.users;
    }

    getById(id) {
        return this.users.find(i => i.id === id)
    }
}