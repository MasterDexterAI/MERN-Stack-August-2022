// array - collection of different types of elements

let a = [1,2,3,"A"]
//       0 1 2  3

//      545414    514656
console.log(a);

console.log(a[3]);

// TV    -   class

// smart
// usb
// hdmi
// etc

// actual TV  - object - Hashcode/ID/Virtual Code (123456879481515)
// product ID

// remote - name
// reference


a[2] = 100

console.log(a);

console.log(a[9]);  // undefined

a[9] = 200

console.log(a[9]);

console.log(a);

console.log(a[7]);


// reference

let x = a

x[0] = 500

console.log(x);

console.log(a);


let arr = [
    "orange",
    true,
    { name: "dev" },
    function(){ alert("Hello") }

]

console.log(arr);

console.log(arr[2]);


console.log(arr[2].name);

console.log(arr[3]);
//          indore()\


console.log(arr[3]());

// stack - LIFO
// push - to insert an element
// pop - to delete an element

let f = ['orange', 'apple', 'banana']

f.push("Car")

console.log(f);

f.pop()

console.log(f);

console.log(f.pop());

console.log(f);

// queue - FIFO

// shift
let feb = ['orange', 'apple', 'banana']

feb.shift()

console.log(feb);

console.log(feb[0]);

console.log(feb.length);

// unshift

feb.unshift("holi")

console.log(feb);

