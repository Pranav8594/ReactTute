class Person {

    constructor(name = 'Anon', age = 0) { //setting up default, if no param is passed
        this.name = name; //this refers to the class instance, for eg. 'me' instace declared below
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${this.name}!`; //template strings

    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }

}
class Student extends Person {

    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major; //flipping twice 
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += `Their major is ${this.major}`
        }
        return description;
    }

}

class Traveller extends Person {

    constructor(name, age, homelocation) {
        super(name, age);
        this.homelocation = homelocation;
    }

    hasHomelocation() {
        return !!this.homelocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHomelocation()) {
            greeting += ` I am visiting from ${this.homelocation}.`
        }
        return greeting;

    }
}



const me = new Traveller('Pranav Joshi', 25, 'Melbourne');
const other = new Traveller();
console.log(me.getGreeting());
console.log(other.getGreeting());