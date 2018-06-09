# Inheritence in JavaScript

Unlike other Object Oriented programming languages, JavaScript's inheritence behaves differently.
We will be discussing on how inheritence works on JavaScript.


## Prototypal Inheritence

Creating object that inherits properties and methods from other objects.

In JavaScript Object has an unique property `[[prototype]]` referred on object as `__proto__` which point's to it's prototype object.

for eg.
```javascript
const obj = {
    key1: 'value',
    key2: 'value2'
}
obj.___proto___ === Object.prototype // points to Object.prototype
Object.prototype.__proto__ === null  // During property lookup it goes upward in prototype chain until it gets null
```

#### One way of inheriting is using `Object.create()`
```javascript
const person = {
    name: 'John',
    address: 'Africa'
}

const employee = Object.create(person, {
    company: { value: 'Google'}
}); // employee will inherit name and address from person
```

#### Another way is directly setting `__proto__` (Not recommended) 
```javascript
const person = {
    name: 'John',
    address: 'Africa'
}

const employee = {
    company: 'Google',
    __proto__: person // it set's employee's prototype to person object
}

employee.name === 'John';
employee.address === 'Africa';
```


## Constructor Functions

```javascript
function Person(name, address) {
    this.name = name;
    this.address = address;
}

Person.prototype.sayMyName = function() {
    console.log(`I am ${this.name} from ${this.address}`);
}

// now we instantiate object through constructor function as
const employee1 = new Person('John', 'Africa');
const employee2 = new Person('Lana', 'America');

// add own's properties and methods
employee1.company = 'Microsoft';
employee2.company = 'Google';

// add to Person prototype so that all of it's instance get this
Person.prototype.sayMyFullProfile = function() {
    console.log(`I am ${this.name} from ${this.address} working in ${this.company}`);
};

employee1.sayMyFullProfile(); // I am John from Africa working in Microsoft
employee2.sayMyFullProfile(); // I am Lana from America working in Google

```


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
emp1.sayMyFullProfile(); // I am John Doe from Africa working in Microsoft
```