// while loop

// var i = 1;

// while(i <= 10){
//     console.log("Himanshu");
//     i += 1;
// }


// print series of numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// var i = 1;

// while(i <= 10){
//     console.log(i);
//     i += 1;
// }

// 1
// 4
// 9
// 16
// 25
// 36
// 49
// 64
// 81
// 100


// var i = 1;

// while(i <= 10){
//     console.log(i*i);
//     i += 1;
// }

// WAP to enter a number from user and print reverse of it.
// 153

// 351

//   X  %  y  = z
//  153 % 10  = 3
//  153 / 10 = parseInt(15.3) = 15

//  15 % 10  = 5
//  15 / 10 = parseInt(1.5) = 1

//  1 % 10  = 1
//  1 / 10 = parseInt(0.1) = 0

// var n = parseInt(prompt("Enter a Number: "))
// var r;

// while(n > 0){
//     r = n % 10
//     console.log(r);
//     n = parseInt(n / 10)
// }

// 3
// 5
// 1

// 351 * 2

// how to stop line change in console.log


// WAP to enter a number from user and print sum of its 
// individual digits

// 153

// 9

// 0 sum
// 3 
// 5
// 1

// var n = parseInt(prompt("Enter a Number: "))
// var r;
// var sum = 0;

// while(n > 0){
//     r = n % 10           //  r = 3, 5, 1
//     sum = sum + r        // sum = 0, 3, 8, 9
//     n = parseInt(n / 10) //   n = 153, 15. 1, 0
// }

// console.log("Sum = " + sum);

// WAP to enter a number from user and print reverse of it.

var n = parseInt(prompt("Enter a Number: "))
var r;
var sum = 0;

while(n > 0){
    r = n % 10              //  r = 3, 5, 1
    sum = sum*10 + r        // sum = 0, 3, 35, 351 
    n = parseInt(n / 10)    //   n = 153, 15, 1, 0
}

console.log("Reverse = " + sum);
console.log(sum * 2);


// WAP to enter a number from user and check if 
// it is pallindrome or not

// 121
// 121 - pallindrome


