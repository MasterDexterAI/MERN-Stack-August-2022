// destructuing 

// array

// const numbers = [1,2,3]

// let [one, two, three,four] = numbers

// console.log(one,two,three,four);


const fullStack = [
    ['HTML', 'CSS', 'JS','React'],
    ['Node', 'Express', 'MongoDB']
]

const [frontEnd, backEnd] = fullStack

console.log(frontEnd);

console.log(backEnd);


// skip values

const numbers = [1,2,3]

let [one , , three] = numbers

console.log(one,three);

// default value

// const names = [undefined, 'Abhinav', 'Sharma']

// let [
//     firstName = 'Virat',
//     lastName,
//     fatherName,
//     motherName = 'Kohli'
// ] = names

// console.log(firstName, lastName, fatherName, motherName);


const names = ['Rohit', 'Abhinav', 'Sharma']

let [
    firstName = 'Virat',
    lastName,
    fatherName,
    motherName = 'Kohli'
] = names

console.log(firstName, lastName, fatherName, motherName);


// spread operator
const nums = [1,2,3,4,5,6,7,8,9,10]

let [a,b,c, ...rest] = nums

console.log(a,b,c);

console.log(rest);


// destructure with iterations or for loop

const countries = [
    ['India', 'Delhi'],
    ['UK', 'England'],
    ['Sri Lanka', 'Pochinki']
]

// for (i of countries){
//     let [country, capital] = i
//     console.log(country, capital);
// }
// [country, capital] = ['India', 'Delhi']

for ([country, capital] of countries){
    console.log(country,"==>" ,capital);
}


// destructuring object
// json

// let o = {
//     "firstname": 'Ravi',
//     age: 21,

// }


// const rectangle = {
//     width:20,
//     height: 10,
//     area: 200
// }

// let {width, height, area, perimeter} = rectangle

// console.log(width, height, area, perimeter);

// renaming


// const rectangle = {
//     width:20,
//     height: 10,
//     area: 200
// }

// let {width:w, height:h, area: a1, perimeter:p} = rectangle

// console.log(w, h, a1, p);

// default

const rectangle = {
    width:20,
    height: 10,
    area: 200
}

let {width, height, area, perimeter = 60} = rectangle

console.log(width, height, area, perimeter);


// destructuring in function argument

// const react = {
//     width: 20,
//     height:10
// }

// const calculatePerimeter = rectangle =>{
//     return 2 * (rectangle.width + rectangle.height)
// }

// console.log(calculatePerimeter(react));

const react = {
    width: 20,
    height:10
}

//                   {width,height} =  {    width: 20, height:10}

const calculatePerimeter = ({width,height}) =>{
    return 2 * (width + height)
}

console.log(calculatePerimeter(react));