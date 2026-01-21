/* 
use strict:
- code is in produtcion we dont want to skip any edge cases behaviour change
-Strict mode rule:

-In strict mode, a normal function that is called as a method still sets this to the object before the dot. 
-Only standalone function calls default this to undefined (instead of global object).

Environment           location    strict   console.log(this)
Browser             TopLevel     No         window
Browser              Function     No         window
Browser              Toplevel     yes       undefined
Browser              function     yes       undefined
Node                 Toplevel     No        {} (module.exports)
Node                 function     No         Global
Node                 function     yes       undefined
Node                 TopLevel    yes         {} (module.exports)

Note: in case of normal functions, objec left of the "." becomes this
- arrow functions doesnt have implicit this ,it takes this of its parent scope
*/
`use strict`;
function normal(){
const arrfn=() =>{
console.log(this);
}
arrfn();
}
const abc = {
name:"jay",
test: normal
}
abc.test()
/* Step-by-step summary


abc.test() → calls normal as a method → this = abc


arrfn is an arrow function → inherits this from normal → this = abc


console.log(this) inside arrfn → prints abc



 Key Points to Remember
Thingthis valueNormal function called as object methodobject before dotNormal function standalone call (strict mode)undefinedArrow functioninherits this from lexical parent

Now you can tell me your understanding of why this is abc here, and we can confirm/correct it.
What’s your understanding? */