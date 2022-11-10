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

// const goa = {
//     fname: "Avhinav",
//     lname: "sharma"
// }

// console.log(goa);
// console.log(goa.hasOwnProperty("fname"));

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

// class Person{
//     constructor(){
//         console.log("constructor of person class");
//     }
// }

// const p1 = new Person()

// day 25

// parameterized constructor

// class Person{
//     constructor(a, b){
//         console.log(this);             // current object
//         this.firstName = a     //
//         this.lastName = b       //
//     }
// }

// const p1 = new Person("abhiyuday", "sharma")

// console.log(p1.firstName);
// console.log(p1.lastName);

// const p2 = new Person("rohit", 'sharma')

// console.log(p2.firstName);
// console.log(p2.lastName);


// default values in a constructor

// class Animal{
//     constructor(firstName = "Virat", lastName="Kohli"){
//         this.firstName = firstName
//         this.lastName = lastName
//     }
// }

// const a1 = new Animal()

// console.log(a1);

// class methods

// class Animal{
//     constructor(firstName = "Virat", lastName="Kohli"){
//         this.firstName = firstName
//         this.lastName = lastName
//     }

//     getName(){
//         const fullName = this.firstName + " " + this.lastName

//         return fullName
//     }
// }

// const a1 = new Animal()

// console.log(a1);
// console.log(a1.getName());


// class Animal{
//     constructor(firstName = "Virat", lastName="Kohli"){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.bullets = 0
//     }

//     getName(){
//         const fullName = this.firstName + " " + this.lastName

//         return fullName
//     }
// }

// const a1 = new Animal()

// console.log(a1.bullets);
// console.log(a1.getName());


// getter method

// class Pubg{
//     constructor(coins, username, skin){
//         this.coins = coins
//         this.username = username
//         this.skin = skin
//     }
//     getName(){
//         const result = this.coins + " " + this.username + " " + this.skin
//         return result
//     }
//     get getCoins(){
//         return this.coins
//     }
//     get getSkin(){
//         return this.skin
//     }
// }

// const abhi = new Pubg(0, "abhinav", "dragon")

// console.log(abhi.getCoins);
// console.log(abhi.getSkin);

// setter method


// class Pubg{
//     constructor(coins, username, skin){
//         this.coins = coins
//         this.username = username
//         this.skin = skin
//     }
//     getName(){
//         const result = this.coins + " " + this.username + " " + this.skin
//         return result
//     }
//     get getCoins(){
//         return this.coins
//     }
//     get getSkin(){
//         return this.skin
//     }
//     set setCoins(coins){
//         this.coins = coins
//     }
//     set setSkin(skin){
//         this.skin = skin
//     }
// }

// const abhi = new Pubg(0, "abhinav", "dragon")

// console.log(abhi.getCoins);
// console.log(abhi.getSkin);

// abhi.setCoins = 100
// abhi.setSkin = "suit"

// console.log(abhi);

// static methods - utility functions


class Pubg{
    constructor(coins, username, skin){
        this.coins = coins
        this.username = username
        this.skin = skin
    }
    getName(){
        const result = this.coins + " " + this.username + " " + this.skin
        return result
    }
    get getCoins(){
        return this.coins
    }
    get getSkin(){
        return this.skin
    }

    static showDate(){
        return "This is todays date"
    }
}

const abhi = new Pubg(0, "abhinav", "dragon")

console.log(abhi.getCoins);
console.log(abhi.getSkin);

console.log(Pubg.showDate());

