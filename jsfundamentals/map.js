Map:
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]
// map takes a function that is applied to each item in the array, returning a new array with the results.

// 🧠 Simple definition

// 👉 map() creates a NEW array
// 👉 It runs a function on every element
// 👉 It does NOT change the original array

// 🔍 Think like this:

// “Take each value, do something, return a new value”