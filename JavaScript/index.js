console.log("Starting");
let a = 10;
console.log("a:", a);
// const b = 10;
// console.log("b:", b);

//Not good practice
var c = 10,
  b = 10;
//best practice
var f = 1;
var c = 2;

//Undefined values
let var1;
console.log(var1); //undefined

//define objects
let students = {
  age: 22,
  firstname: "anchal",
  rollno: 10,
};
console.log(students);
console.log(students["age"]);
console.log(students.firstname);

//Arrays in JavaScript
let arr = ["a", "b", "c", "d", "e"]; //Array size=5
console.log(arr);
console.log(arr[4]);
arr[5] = 9; //new element added to an array
console.log(arr); //[ 'a', 'b', 'c', 'd', 'e', 9 ] size=6
console.log(arr[6]); //gives undefined

// var msg = "hello world";
// alert(msg);

// if (true) {
//   var test = true;
// }
// alert(test); // test,lives after if block

//If a code block is inside a function then var becomes a function-level variable
// function greet() {
//   if (true) {
//     var code = "good morning";
//   }
//   alert(code); //ReferenceError: alert is not defined
// }
// greet();

// var phrase = "hii";
// var phrase = "hello world"; //redeclartions of same variable allowed

// abbreviated as IIFE
// That’s not something we should use nowadays, but you can find them in old scripts.
// (function () {
//   var message = "Hello";

//   alert(message); // Hello
// })();

//loose equality vs strict equality (== check for value)
let num = 1;
let str = "1";
if (num == str) {
  console.log("True, loose equality");
}
if (num === str) {
  //(=== check for value and datatype)
  console.log("True, strict equality");
} else {
  console.log("False, strict equality");
}

//Ternary Operators
let age = 12;
let res = age > 18 ? console.log("Vote") : console.log("No vote");
//console.log(res);

//switch case:
num = 5;
switch (num) {
  case 1:
    console.log("A");
    break;
  case 2:
    console.log("B");
    break;
  default:
    console.log("default");
}
