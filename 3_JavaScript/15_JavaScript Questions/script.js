// Question 1

// fibonacii series

// 1 to 10
// 0 1 1  2   3    5  8 -> 10

// 4m - 4000000

// Question 2

// prime numbers

// 6th prime number -> 11

// 10001st prime number

let n = parseInt(prompt("Enter a number"))

let count = 0;

for (var i = 2; i <= n; i++){
    if (n%i == 0){
        i++;
    }
}

let sum =0;
for(let j =2; j<=10001;j++){
    for(let i =1; i<=j ; i++){
        if(j%i==0)
        sum++
    }
    if(sum==2)
    console.log(j)
    sum=0
}
