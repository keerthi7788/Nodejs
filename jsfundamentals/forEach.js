// forEach: Executes a provided function once for each array element, but unlike map, forEach does not create a new array.
const arr =[1,2,3,4,5 ]
// for(i=0;i<arr.length;i++)
//     {
//         console.log(arr[i])
// }
//insted of executing loop here we can use the foreach higher orderf function
const loop= function(element,index,arr){
    console.log(`element:${element} index:${index} array:${arr}`);
}
const PrintOddNumbers = function(number){
    if(number%2==1){
        console.log(number)
    }
}
const squre = function(num){
    console.log(num*num)
}
arr.forEach(squre)
arr.forEach(loop)
arr.forEach(PrintOddNumbers)