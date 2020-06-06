class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        this.tardies = 0;
    }
    // Instance method: method is instansiated on the individual instance of a new object
    fullname() {
        return `Hello ${this.firstName} ${this.lastName}`
    }
    markLate() {
        this.tardies++;
        if (this.tardies === 3) {
            return `${this.firstName} ${this.lastName} has had ${this.tardies}. He is now expelled!`
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies}`
    }
}

let alex = new Student("Alex", "Suarez")

console.log(alex.markLate())
console.log(alex.markLate())
console.log(alex.markLate())