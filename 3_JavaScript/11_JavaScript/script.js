// WAP to enter a number from user and print reverse of it.

// var n = parseInt(prompt("Enter a Number: "))
// var r;
// var sum = 0;

// while(n > 0){
//     r = n % 10              //  r = 3, 5, 1
//     sum = sum*10 + r        // sum = 0, 3, 35, 351 
//     n = parseInt(n / 10)    //   n = 153, 15, 1, 0
// }

// console.log("Reverse = " + sum);
// console.log(sum * 2);


// WAP to enter a number from user and check if 
// it is pallindrome or not

// 121
// 121 - pallindrome

// var n = parseInt(prompt("Enter a Number: "))
// var temp = n;
// var r;
// var sum = 0;

// while(n > 0){
//     r = n % 10              //  r = 3, 5, 1
//     sum = sum*10 + r        // sum = 0, 3, 35, 351 
//     n = parseInt(n / 10)    //   n = 153, 15, 1, 0
// }

// if(temp == sum){
//     console.log("Pallindrome");
// } else {
//     console.log("Non-Pallindrome");
// }


// document.getElementById("one").innerHTML = "Welcome to JavaScript"

// // document.getElementById("hi").innerHTML = "Hi User!!"

// var x = document.getElementById("hi").innerHTML

// console.log(x);

// // functions

// // definition of a function
// function indore(){
//     console.log("Hello from indore function");
// }

// // calling of a function
// indore()


// // parameters of a function

// function user(x){
//     document.getElementById("goa").innerHTML = "Hello " + x;
// }

// var n = prompt("Enter your name: ")

// user(n);

// Array 

// collection of similar type of elements

var y = [10,20,50]
//       0   1  2

console.log(y);

console.log(typeof y);

console.log(y[2]);


// math

console.log(Math.PI);

console.log(Math.sqrt(100));

console.log(Math.floor(7.9));

console.log(Math.ceil(7.1));

console.log(Math.random());


console.log(Math.random() * 10);


console.log(Math.floor(Math.random() * 10));


console.log(Math.floor(Math.random() * 15));


// WAP to enter 2 numbers from user and print 
// addition substraction multiplication and division.
// create functions for each.


function addition(a,b){
    console.log(a + b);
}

