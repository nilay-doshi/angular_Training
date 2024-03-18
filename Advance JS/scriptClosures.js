//Closures 
//Task 1
// function factorialRange(start, end) {
//     let factorials = [];

//     function factorial(n) {
//         if (n === 0 || n === 1) {
//             return 1;
//         } else {
//             return n * factorial(n - 1);
//         }
//     }

//     for (let i = start; i <= end; i++) {
//         factorials.push(factorial(i));
//     }

//     return factorials;
// }

// const result = factorialRange(0, 10);
// console.log(result);

//Output 1

// 0
// : 
// 1
// 1
// : 
// 1
// 2
// : 
// 2
// 3
// : 
// 6
// 4
// : 
// 24
// 5
// : 
// 120
// 6
// : 
// 720
// 7
// : 
// 5040
// 8
// : 
// 40320
// 9
// : 
// 362880
// 10
// : 
// 3628800
// length
// : 
// 11
// [[Prototype]]
// : 
// Array(0)

//Task 2
// function calculate(x) {

//     function multiply(y) {
    
//     return x * y;
    
//     }
    
//     return multiply;
    
//     }
    
//     const multiply3 = calculate(3);
    
//     const multiply4 = calculate(4);
    
//     console.log(multiply3);         // Output: function multiply(y) { return x * y; } - prints the function definition
//     console.log(multiply3());       // Output: NaN -y is not provided
//     console.log(multiply3(6));      // Output: 18.  -y set to 6
//     console.log(multiply4(2));      // Output: 8.  -y set to 2

//Task 3
// function outest(){

//     var c = 12;
    
//     function outer(b){
    
//     function inner() {
    
//     console.log(a, b, c);
    
//     }
    
//     let a = 10; 
    
//     return inner;
//     }
//     return outer;
    
//     }
    
//     let a =100;
    
//     var close = outest()("Hello Closure");
    
//     close();

// Output - 10 'Hello Closure' 12
//outest: This function defines an outer function named outer
// which itself defines an inner function named inner. It also defines a variable c.

//Task 4

// function setCount() {

//     let number = 0;
    
//     return function () {
//     console.log(number++); 
//     console.log(++number);
//         };
//     }
//     const counter = setCount();
    
//     counter(); 
//     // number++ = 0 -This logs the current value of number it logs 0
//     // ++number = 2 -This increments number first and then logs its value.
//     counter();
//     // number++ = 2 -This logs the current value of number it logs 2
//     // ++number = 4 -This increments number first and then logs its value.
    
//     counter()
//     // number++ = 4 -This logs the current value of number it logs 4
//     // ++number = 6 -This increments number first and then logs its value.
    