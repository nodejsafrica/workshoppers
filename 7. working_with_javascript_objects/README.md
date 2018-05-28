# JavaScript Objects

Javascript objects are collection of properties. 
Properties are just association of key and value

## Creating JavaScript Object

```
const myObj = {}; 

```
OR
```
const myObj = new Object(); // calling Object constructor method

```
OR 
```
// using function constructor
function myConstructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

const myObj = new myConstructor('John Doe', 24, 'Africa');
```
Using 
## Adding Properties

```
myObj.someNumber = 1;
myObj.someString = 'Some string inside quote';

```

we can add properties during object initialziation also

```
const myObj = {
    someNumber: 1,
    someString: 'Some string inside quote',
    anotherNestedObject: {
        nestedProperty: [1, 2, 3, 4]
    }
}
```

## accessing Object's properties

### Object.keys() method
Object.keys(myObj) returns all own keys(not inherited) of the object

you can use array methods like `forEach` to iterate over object's keys
```
const allProperties = Object.keys(myObj) 
// returns ['someNumber', 'someString', 'anotherNestedObject']
allProperties.forEach((key) => {
    console.log(myObj[key])
})
```

### for...in loop

`for...in` loop traverses along property name , for e.g in above object `someNumber`, `someString`, `anotherNestedObject`.

```
for(let key in myObj) {
    // to check if the properties is it's own property or derived from prototype chain
    if(myObj.hasOwnProperty(key)) {
        console.log(myObj[key]) // key is string type myObj['someNumber']
    }
}
```
### directly accessing object properties.
```
const student = {
    fName: 'John',
    lName: 'Doe',
    roll: 26,
    rank: 3,
    skills: ['football', 'guitar', 'hockey']
};

const student_name = student.fName + ' ' + student.lName;
```
// Using ES6 object destructuring

```
 const { fName, lName, roll} = student; 

 // fName = 'John', lName = 'Doe', roll = 26
```






