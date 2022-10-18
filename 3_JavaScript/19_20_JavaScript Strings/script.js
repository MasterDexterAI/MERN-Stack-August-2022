// // strings

// let s = 'indore'

// console.log(s);

// console.log(typeof s);

// let a = 'hello' + 100

// console.log(a);

// let b =  100 + 'hello'

// console.log(b);

// // back ticks

// let c = `this is a loop
// this is line change ${b}
// `

// console.log(c);

// // length

// let alpha = "india"
// //           01234

// // alert(alpha.length)

// console.log(alpha[0]);

// // TV               -- class
// // - bluetooth
// // - hdmi
// // - usb
// // - wifi

// // Actual TV       -- object
// // - Product ID    -- HashCode

// // Remote          -- name/reference

// // charAt

// let goa = "goa is the best"

// // alert(goa.charAt(7))


// // strings are immutable

// let f = "indore"

// f[0] = "A"  // can not change

// console.log(f);

// // 1 + 1 = 2  // numbers are immutable

// // true // immutable

// // questions

// // restart
// // resta$t

// // level
// // leve$

// // abhyudaya
// // abhyud$y$

// // day 2 in strings

// // touppercase


// let t = "indorE"

// console.log(t.toUpperCase());

// console.log(t);

// console.log(t.toLowerCase());

// // indexOf

// let st = "this is an apple this"

// console.log(st.indexOf("this"));

// console.log(st.indexOf("This"));  // -1


// console.log(st.indexOf("this",2));  // 17

// console.log(st.indexOf("i", 7));


// // includes

// let set = "this is an apple this"

// console.log(set.includes("this"));

// console.log(set.includes("orange"));



// startswith

let sat = "this is an apple this"

console.log(sat.startsWith("this"));

console.log(sat.startsWith("apple"));


// slice

let may = "this is january"

console.log(may.slice(2, 6));

console.log(may.slice(3));

console.log(may.slice(0,1));  // t

console.log(may.slice(-6,-1));

console.log(may.slice(7,2));  // empty string - ''



// codepoint

alert("A".codePointAt(0))

alert("indore".codePointAt(2)) 

// A - 65
// B - 66
// Z - 90

// a - 97
// z - 122

// space - 32


alert(" ".codePointAt(0))


alert(`
`.codePointAt(0))


// fromcodepoint

alert(String.fromCodePoint(65))


// s = "1+2+3+4+5"
//      012345678

let s = "1+2+3+4+5";

let a = s.split("+");

let sum = 0;

for(let i=0;i<a.length;i++){
    sum = parseInt(a[i])+sum
}

console.log(sum)

// wap to enter a sentence from user and print largest word in it.

// this is an aeroplane
//