// Map:
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map(number => number * 2);
// console.log(doubled); // Output: [2, 4, 6, 8, 10]
// map takes a function that is applied to each item in the array, returning a new array with the results.

//  Simple definition

//  map() creates a NEW array
// It runs a function on every element
// It does NOT change the original array

// Think like this:

// “Take each value, do something, return a new value”
//note map 1:1 maping in the form of an arrray output would be of the same length as input
//  Why map?
// Because structure stays same length, but data shape changes

const arr =[1,2,3,4,5 ]
const sqr =function(element){
    return element*element;
}
const squareArray = arr.map(sqr);
console.log(arr,squareArray)

const quadarray =arr.map(sqr).map(sqr)
console.log("quadarray",arr,squareArray,quadarray)

/*filter
//it returs you an array
-gives you filteres results. means it help filtering the resukts depends on some array 
-callback that we pass to filter should cater to the filte criteria
filter() – Real-World Use Cases

Use filter when you want to SELECT data
 Use case 1: Show only active users
const users = [
  { name: "A", active: true },
  { name: "B", active: false }
];

const activeUsers = users.filter(u => u.active); */

const isEven = function(num){
    return num % 2 === 0;
}
const evenArray = arr.filter(isEven);
console.log("evenArray",arr,evenArray)

const largeNUmber =function(num){
    return num>1000;
}
const LargesSqr =arr.filter(largeNUmber)
console.log(`LargesSqr,${arr},LargesSqr`)
    
/* Reduce
-GIven an array to reduce the value to a single data point, promitive,object
*/
const sum= function(acumulator,current){
    console.log(acumulator,current)
    return acumulator+current
}
const total=arr.reduce(sum,0)
console.log("reduce total",total)