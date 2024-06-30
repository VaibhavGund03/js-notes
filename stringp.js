// string is a sequence of character used to represent text

/* create a string 

let str ="vaibhav gund";

string length

str,lenght


string indices

str[0],str[1],str[2].

*/

let str = "vaibhav gund";
console.log(str.length); // legnth of string
console.log(str[0],str[1],str[2],str[3],str[4],str[5]); // use to find the index number for character

// =============== template literals in js =====
/* a way to have emmbeded expression in string 
 'this is a templete literal'

 == == string interpolation

 to create a string by doing subtituation  of  placeholder


 'string text ${expression} string text'


*/
// template literal use like a console.log example
// create a object
let obj = {
    item :"pen",
    price: 10,

};

console.log("the cost of",obj.item, "is",obj.price,"rupees.") // output is == the cost of pen is 10 rupees.



let template = `the cost of ${obj.item} is ${obj.price} rupees.`;
console.log(template); // this is a template literal concept.
// use to print a systamatic output

//  ${} string interpolation concept




// =========string methods in  js =========

/*
this are the built- in function to mainipulate a string.

str.toUpperCase()

str.toLowerCase()

str.trim() // remove white spaces

// method is like a block of code



*/

let string = "   vaibha vgund    ";
 //  only string.toUpperCase t is not change a  orignal value like a string ="vaibhav gund".   string.toUpperCase is always create a new string likea folowing,

/*let newStr = string.toUpperCase(); // output is VAIBHAV GUND
console.log(newStr);*/


 /*let newStr = string.toLowerCase(); 
console.log(newStr);*/


let newStr = string.trim(); 
console.log(newStr);

/*

str.slice(string,end?) // return a part of string 

str1.concat(str2)    // joins str2 with str1

str.replace(searchval,newval)

str.charat(idx)

*/

let stri = "hello";
let strin = "vaibhav";

console.log(stri.slice(1,4)) // print the suggested part of the string.

console.log(  stri.concat(strin)  );

// or

console.log(stri + strin);

let hello ="hello";

console.log(hello.replace("h","y")); // replace at one time single value 
console.log(hello.replaceAll("h","y"));
// replace  all value that are same as .

//
let a ="I Love JS";
console.log(a.charAt(0));// this concept return  character  from index number.


