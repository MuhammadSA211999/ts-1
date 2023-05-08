function add(num1: number, num2: number): number {
    return num1 + num2
}
const total: number = add(2, 5)
// console.log(total)

function addString(num1: number, num2: number): string {
    const string = num1 + num2
    // console.log(string)
    return string + ''
}
const stringTotal: string = addString(2, 5)
// console.log(stringTotal)

// arrow function 
const addArrow = (num1: number, num2: number): number => num1 + num2
const arroeTotal: number = addArrow(2, 8)
console.log(arroeTotal)

// method function 
const students: {
    name: string;
    age: number;
    addAge(exAge: number): string
} = {
    name: 'Muhammad SA',
    age: 24,
    addAge: function (exAge: number) {
        return `${this.name} is ${this.age + exAge} years old`
    }

}
const ageSentence: string = students.addAge(12)
console.log(ageSentence)