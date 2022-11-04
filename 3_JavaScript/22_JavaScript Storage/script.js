// local storage

// session storage

const skills = ['HTML', 'CSS', 'JS']

// JSON - JavaScript Oject Notation
const skillJSON = JSON.stringify(skills, undefined,4)

localStorage.setItem('skills', skillJSON)

console.log(localStorage);

// get data from local storage

let firstName = localStorage.getItem('skills')

alert(firstName)

localStorage.clear()

console.log(localStorage);