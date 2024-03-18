
//1
//console.log(x);
//let x = 10;
//Output Error script.js:1 
// Uncaught ReferenceError: Cannot access 'x' before initialization
// at script.js:1:13

//2
//console.log(x);
//var y = 10;
//Output Error 
//Uncaught ReferenceError: x is not defined
//at script.js:9:13
//(anonymous) @ script.js:9

//3

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

