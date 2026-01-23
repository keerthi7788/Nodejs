// : A higher-order function is a function that either takes one or more functions as arguments,
//  returns a function as its result, or both. This allows developers to use functions as values,
//  enhancing code modularity and reusability.

// Common Examples:

// map: Applies a given function to each element in an array, returning a new array with the results.
// filter: Takes a function to test elements in an array, returning a new array with all elements that pass the test.
// reduce: Executes a function on each element of the array, resulting in a single value. It’s useful for accumulating values or combining array contents.
// forEach: Executes a provided function once for each array element, but unlike map, forEach does not create a new array.
// Use Cases: Higher-order functions are crucial for abstracting and encapsulating code logic, enabling cleaner and more readable code. They promote function reusability and can significantly reduce code verbosity.
function Cookfood(order){
    console.log(`preparing ${order}`);
}
function Softdeink(drinkOrders){
    console.log(`serving ${drinkOrders}`);

}
function Restorent(Cookfood,Softdeink,order,ordertype){
    if (ordertype=="food"){
    return Cookfood(order)
    }else{
        return Softdeink(order)
    }
}
Restorent(Cookfood, Softdeink,"biryoni","food")