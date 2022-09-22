// // function 

// // definition of function
// // function alpha(){
// //     var y = 10;

// //     console.log(y);
    
// //     return y + 5
// // }

// // calling of function

// // var e = alpha();
// //        15

// // console.log(e);


// // function expression

// // var beta = function(){
// //     var y = 20
// //     console.log(y);
// //     return y + 5
// // }

// // var r = beta()

// // console.log(r);

// // console.log(beta);

// // console.log(typeof beta);


// // function statement with argument 

// var delta = function(a, b){
//     var y = a + b;
//     console.log(y);
// }

// delta(10, 20);

// // console.log(b); // b is local variable


// // arrow function

// // single line arrow funtion

// var dog = () => console.log("hello from dog");

// dog();


// // argument in single line arrow function

// var cat = (x, y) => x + y


// console.log(cat(10,21));


// // single argument

// var square = n => n * n * n

// console.log(square(7));


// // multi line arrow function

// var yellow = () => {
//     var u = 11
//     console.log(u);
//     return u + 6
// }

// console.log(yellow());

// // ternary operator

// // ? :

// var x = 0

// var y = (x == 1)? "Login" : "Logout"

// console.log(y);


// 11 > 5 ? alert("Greater") : alert("Smaller")


// var age = prompt("Enter  Your Age: ")

// var welcome = age > 18 ? () => alert("You are balik") : () => alert("You are nabalik")

// welcome()

// var and let

var f = 10;

var f = 20;

// let

// let f = 10;

// let p = 20;

// console.log(f);


// function hello(){
//    let l = 10;
// }

// console.log(l);


let r = 10;
let s = 20;

{
    let r = 50
    console.log(r);
}

r = 40
console.log(r);


let hello;

console.log(hello);

var hi;

console.log(hi);


var o = 10

{
    var o = 20
    console.log(o);
}

console.log(o);