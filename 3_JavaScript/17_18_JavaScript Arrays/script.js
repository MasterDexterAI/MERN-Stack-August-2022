// array - collection of different types of elements

// let a = [1,2,3,"A"]
// //       0 1 2  3

// //      545414    514656
// console.log(a);

// console.log(a[3]);

// // TV    -   class

// // smart
// // usb
// // hdmi
// // etc

// // actual TV  - object - Hashcode/ID/Virtual Code (123456879481515)
// // product ID

// // remote - name
// // reference


// a[2] = 100

// console.log(a);

// console.log(a[9]);  // undefined

// a[9] = 200

// console.log(a[9]);

// console.log(a);

// console.log(a[7]);


// // reference

// let x = a

// x[0] = 500

// console.log(x);

// console.log(a);


// let arr = [
//     "orange",
//     true,
//     { name: "dev" },
//     function(){ alert("Hello") }

// ]

// console.log(arr);

// console.log(arr[2]);


// console.log(arr[2].name);

// console.log(arr[3]);
// //          indore()\


// console.log(arr[3]());

// // stack - LIFO
// // push - to insert an element
// // pop - to delete an element

// let f = ['orange', 'apple', 'banana']

// f.push("Car")

// console.log(f);

// f.pop()

// console.log(f);

// console.log(f.pop());

// console.log(f);

// // queue - FIFO

// // shift
// let feb = ['orange', 'apple', 'banana']

// feb.shift()

// console.log(feb);

// console.log(feb[0]);

// console.log(feb.length);

// // unshift

// feb.unshift("holi")

// console.log(feb);


// for loop

// let may = ['orange', 'apple', 'banana', 'june']

// for(let i = 0; i < may.length; i++ ) {
//     console.log(may[i]);
// }


// for in loop
//             0 1 2 3
//               y
// for (let y in may){
//     console.log(y);
// }


// for of loop
//            orange apple banana june
//              x
// for (let x of may){
//     console.log(x);
// }

// let m = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// console.log(m[1][2]);


// splice

// let july = ['orange', 'apple', 'banana', 'june']

// july.splice(1,2)

// console.log(july);

// july.splice(0, 0, "lets", 'goa')

// console.log(july);

// // slice
// //          -4        -3         -2       -1
// let aug = ['orange', 'apple', 'banana', 'june']

// console.log(aug.slice(1,3));

// console.log(aug.slice(2));

// console.log(aug.slice(-3));

// // concat

// let s = [1,2]
// let e = [3,4]

// console.log(s.concat(e));
// console.log(s);
// console.log(e);

// foreach

// let sep = ['orange', 'apple', 'banana', 'june']

// // sep.forEach(alert)

// sep.forEach( (item, index, array) => {
//     console.log(`Item is ${item} index is ${index} of array ${array}`)
// })

// // indexOf

// console.log(sep.indexOf('june'));

// console.log(sep.indexOf(8));  // -1



// // includes

// console.log(sep.includes('orange'));


// find

let yes = [
    {id:1, name: 'yash'},
    {id:2, name: 'ravi'},
    {id:3, name: 'shyam'},
    {id:4, name: 'rohit'}
]

console.log(yes.find(i => i.id == 2))

let user = yes.find(i => i.id == 2)

console.log(user.name);


// filter

let no = yes.filter(j => j.id > 2)

console.log(no);

console.log(no[0].name);

// isArray
let c= 10
alert(Array.isArray(yes))

alert(Array.isArray(c))