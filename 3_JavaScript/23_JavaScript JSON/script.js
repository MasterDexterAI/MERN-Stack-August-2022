//  JSON - JavaScript Object Notation

const userText = `{
    "users": [
        {
            "firstName":"Rohit",
            "lastName":"Sharma",
            "age":36,
            "email":"rohit@123"
        },
        {
            "firstName":"KL",
            "lastName":"Sharma",
            "age":36,
            "email":"rohit@123"
        },
        {
            "firstName":"Virat",
            "lastName":"Sharma",
            "age":36,
            "email":"rohit@123"
        },
        {
            "firstName":"Bumrah",
            "lastName":"Sharma",
            "age":36,
            "email":"rohit@123"
        }
    ]
}`


// const userObj = JSON.parse(userText, undefined, 4)

// console.log(userObj);


// const userObj = JSON.parse(userText, (key,value) => {
//     let newValue = typeof value == 'string' && key != 'email' ? value.toUpperCase() : value 
//     return newValue
// })

// console.log(userObj);

 // converting objets to JSON

 const users = {
    ravi:
        {
            firstName:"Rohit",
            lastName:"Sharma",
            age:36,
            email:"rohit@123"
        },
    rohit:
        {
            firstName:"Rohit",
            lastName:"Sharma",
            age:36,
            email:"rohit@123"
        },
    virat:
        {
            firstName:"Rohit",
            lastName:"Sharma",
            age:36,
            email:"rohit@123"
        },
    bumrah:
        {
            firstName:"Rohit",
            lastName:"Sharma",
            age:36,
            email:"rohit@123"
        }
}

const txt = JSON.stringify(users, undefined,4)
console.log(txt);