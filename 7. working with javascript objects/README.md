# JavaScript Objects

Javascript objects are collection of properties. 
Properties are just association of key and value

## Creating JavaScript Object

```javascript
const myObj = {}; 

```
OR
```javascript
const myObj = new Object(); // calling Object constructor method

```
OR 
```javascript
// using function constructor
function myConstructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

const myObj = new myConstructor('John Doe', 24, 'Africa');
```
OR
```javascript
// Using `Object.create()` method
const myObj = Object.create({}); 
// using empty object as parameter
// now you can add properties
myObj.someNumber = 1;
myObj.someString = 'Some string inside quote';
```
## Adding Properties

```javascript
myObj.someNumber = 1;
myObj.someString = 'Some string inside quote';

```

we can add properties during object initialziation also

```javascript
const myObj = {
    someNumber: 1,
    someString: 'Some string inside quote',
    anotherNestedObject: {
        nestedProperty: [1, 2, 3, 4]
    }
}
```

## accessing Object's properties

### `Object.keys()` method
`Object.keys(myObj)` returns all own keys(not inherited) of the object

you can use array methods like `forEach` to iterate over object's keys
```javascript
const allProperties = Object.keys(myObj) 
// returns ['someNumber', 'someString', 'anotherNestedObject']
allProperties.forEach((key) => {
    console.log(myObj[key])
})
```

### `for...in` loop

`for...in` loop traverses along property name , for e.g in above object `someNumber`, `someString`, `anotherNestedObject`.

```javascript
for(let key in myObj) {
    // to check if the properties is it's own property or derived from prototype chain
    if(myObj.hasOwnProperty(key)) {
        console.log(myObj[key]) // key is string type myObj['someNumber']
    }
}
```
### directly accessing object properties.
```javascript
const student = {
    fName: 'John',
    lName: 'Doe',
    roll: 26,
    rank: 3,
    skills: ['football', 'guitar', 'hockey']
};

const student_name = student.fName + ' ' + student.lName;
```

```javascript
// Using ES6 object destructuring

 const { fName, lName, roll} = student; 

 // fName = 'John', lName = 'Doe', roll = 26
```






