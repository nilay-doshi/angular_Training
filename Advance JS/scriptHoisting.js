
//task 1
//console.log(x);
//let x = 10;
//Output Error script.js:1 
// Uncaught ReferenceError: Cannot access 'x' before initialization
// at script.js:1:13

//example
// getName();
// console.log(getName);
// getName1();
// console.log(getName1);
// console.log(x);
// function getName1()
// {
//     console.log("GetName1 called");
   
// }
// var getName = () => {
//     console.log("GetName called");
// }
//Output
// undefined
// scriptHoisting.js:42 GetName1 called
// scriptHoisting.js:38 ƒ getName1()
// {
//     console.log("GetName1 called");
   
// }
// scriptHoisting.js:39
// var x =7; 

// task 2
// console.log(y);
// var y = 10;
//Output Error 
//Uncaught ReferenceError: x is not defined
//at script.js:9:13
//(anonymous) @ script.js:9

// task 3

// var a = 4;
// function greet()
// {
//     b = "hello";
//     console.log(b);
//     var b;
// }
// greet();
// console.log(b);

// Output hello
// script.js:25  Uncaught ReferenceError: b is not defined
// at script.js:25:13
// (anonymous) @ script.js:25


