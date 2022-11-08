// c

// int a = 10;

// // struct 

// struct car{
//     int a;
//     flaot price
//     char name[10]
// }

// struct car divyanshu;
//        int a;

const goa = {
    fname: "Avhinav",
    lname: "sharma"
}

console.log(goa);
console.log(goa.hasOwnProperty("fname"));

// oop - design pattern 

// class/prototype/structure - collection of variables and methods

// object - run time or real time entity

// abstraction and encapsulation
// abstraction - showing only essential features without showing any background details.
// encapsulation - wrapping up of data in single unit

// inheritance - aquiring properties of one class into another

// polymorphism - same name multiple functionalities
// method overloading
// method overrinding

// dynamic memory allocation - run time memory allocation

// message passing - communication between objects

// class Person{

// }

// const p1 = new Person()

// console.log(p1);

// constructor

class Person{
    constructor(){
        console.log("constructor of person class");
    }
}

const p1 = new Person()