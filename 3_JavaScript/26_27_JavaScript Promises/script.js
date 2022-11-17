// promises

// pending
// fulfilled
// rejected


// callback


// const doSomething = callBack => {
//     setTimeout(() => {
//         const skill = ["HTML", 'CSS', 'JS']
//         callBack('It didnt work', skill)
//     }, 2000)
// }

// const callBack = (err, result) => {
//     if(err){
//         return console.log(err);
//     } else{
//         return console.log(result);
//     }
// }

// doSomething(callBack)


// const doSomething = callBack => {
//     setTimeout(() => {
//         const skill = ["HTML", 'CSS', 'JS']
//         callBack(false, skill)
//     }, 2000)
// }

// const callBack = (err, result) => {
//     if(err){
//         return console.log(err);
//     } else{
//         return console.log(result);
//     }
// }

// doSomething(callBack)

// promises constructor

// const promise = new Promise((resolve, reject) => {
//     resolve('success')
//     reject('failure')
// })

// const doPromise = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         const skill = ['Html', 'css', 'js']
//         if(skill.length < 0){
//             resolve(skill)
//         }else{
//             reject('Something went wrong')
//         }
//     }, 2000)
// })

// doPromise
//     .then(result => {
//     console.log(result);
//     }).catch(error => {
//         console.log(error);
//     })


// fetch API

// const url = 'https://restcountries.com/v2/all'

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => console.log(error))

// async and await

// const square = async function(n) {
//     return n * n
// }
// const value = await square(5)

// console.log(value);

// day 27

// promise

const url = 'https://restcountries.com/v2/all'

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => console.log(error))

// async and await

const fetchData = async () => {
    try{
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries);
    }catch(err){
        console.error(err)
    }
}

console.log("----async and await");
fetchData();