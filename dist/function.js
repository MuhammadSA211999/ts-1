"use strict";
function add(num1, num2) {
    return num1 + num2;
}
const total = add(2, 5);
// console.log(total)
function addString(num1, num2) {
    const string = num1 + num2;
    // console.log(string)
    return string + '';
}
const stringTotal = addString(2, 5);
// console.log(stringTotal)
// arrow function 
const addArrow = (num1, num2) => num1 + num2;
const arroeTotal = addArrow(2, 8);
console.log(arroeTotal);
// method function 
const students = {
    name: 'Muhammad SA',
    age: 24,
    addAge: function (exAge) {
        return `${this.name} is ${this.age + exAge} years old`;
    }
};
const ageSentence = students.addAge(12);
console.log(ageSentence);
