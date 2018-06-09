# Inheritence in JavaScript

Unlike other Object Oriented programming languages, JavaScript's inheritence behaves differently.
We will be discussing on how inheritence works on JavaScript.


## Prototypal Inheritence

Creating object that inherits properties and methods from other objects.



## Constructor Functions


## Class based Inheritence (Added in ES6)

```javascript
class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    sayMyName() {
        console.log(`I am ${this.name} from ${this.address}`);
    }
}

class Employee extends Person {
    constructor(name, address, company){
        super(name, address);
        this.company = company;
    }
    sayMyFullProfile() {
        console.log(`I am ${this.name} from ${this.address} working in ${this.company}`);
    }
}

const emp1 = new Employee('John Doe', 'Africa', 'Microsoft');
emp1.sayMyFullProfile()
```