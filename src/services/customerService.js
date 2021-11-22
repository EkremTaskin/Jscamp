export default class CustomerService {
    constructor() {
        this.customers = []
    }

    add(user) {
        if (this.validateCustomer(user)) {
            this.customers.push(user)
        }
    }

    list() {
        return this.customers;
    }

    getById(id) {
        return this.customers.find(i => i.id === id)
    }

    validateCustomer(user) {
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                return new DataError(`Validation problem. ${field} is required`, user)
            }
        }

        if(Number.isNaN(Number.parseInt(user.age))){
            return new DataError(`Validation problem. ${user.age} is not a number`, user)
        }

        return hasErrors
    }
}