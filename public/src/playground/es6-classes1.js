class Person{

    constructor(name = 'Anon', age = 0){ //setting up default, if no param is passed
        this.name = name; //this refers to the class instance, for eg. 'me' instace declared below
        this.age = age;
    }
    
    getGreeting(){
        return `Hi, I am ${this.name}!`;  //template strings

    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }

}

const me = new Person('Pranav Joshi', 25);
const other = new Person();
console.log(me.getDescription());
console.log(other.getDescription());