// const arrValue = ['one', 'two', 'three', 'four'];
// const [ ...x,y] = arrValue;
// console.log(x);

//Error : Spread operator should be at the end 

// Task 2
// const arrValue = ["one", ["two", "three"]]; 
// const [x, [y, z]] = arrValue;
// console.log(x); //Output - 1
// console.log([y,z]); // Output - (2) ['two', 'three'] 0 : "two" 1: "three" length: 2
// console.log(z); //three

//Task 3

// let arrValue = [10];
// let [x = 5,  y = 7] = arrValue;
// console.log(x); // Output - 10
// console.log(y); // Output - 7

//Task 4

// const [a,b, ...[length]  ] = [1, 2, 3];
// console.log(a, b, length); 
// output - 1 2 3

//Task 5

// const [a, b, ...{ length }] = [1, 2, 3];
// console.log(a, b, length);
// output - 1,2,1 because 1 element is left initializing

