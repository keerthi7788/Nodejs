/*
This key word:
-who called the function,from where it was 
-a module
- refers to the current object
- is used in methods to access properties of the object
- can be used in constructors to initialize object properties

note:The value of this is decided at runtime, based on how a function is called, not where it is written.
*/
const obj={
    name:"jay",
    greet :function(){
        console.log(this);
        const innerarrow=() => {
            console.log(this);

        };
         innerarrow();
    }

}
obj.greet()
const grt=obj.greet;
grt()

const outerThis=this;
 const obj2= {
    greet:function(){

    },
    greetArrow:() => {
        console.log(this);
        console.log(outerThis===this);
    }
 }
 obj2.greet();
 obj2.greetArrow();

 const gvt =obj2.greet;
 gvt();


 /*  
 Call ,Apply,Blind
 -
 */
const obj3= {
    name:"jay",
    greet:function(){
        console.log(`hellow ${this.name}`);
    }
}
obj3.greet();
const grt3=obj3.greet;
grt3();

const person ={
    name:"niyaz",

}
const person2 ={
    name:"suman"
}
grt.call(person)
grt.apply(person2)
const grtBind = grt.bind(person2);
grtBind();

/*output explanation
Step 1️⃣ — obj3.greet()
obj3.greet();


Call shape:

object.method()


Rule:

If a function is called as object.method(),
this = object

So:

this === obj3
this.name === "jay"


Output:

hello jay

Step 2️ — const grt3 = obj3.greet

 THIS is the key moment.

What exactly is stored in grt3?

 ONLY the function, nothing else.

Think of it like this:

grt3 = function () {
    console.log(`hello ${this.name}`);
}


 NO object is attached
 NO memory of obj3

Step 3️ — grt3()

Now look at the call:

grt3();


Call shape:

function()


Is there an object before the dot?

 No


So JavaScript says:

“No owner? Then I’ll use the default this.”

What is the default this?
Environment	this
Browser (non-strict)	window
Node.js (non-strict)	global
Strict mode	undefined

In your case:

this === global / window

Why this.name is undefined
this.name


means:

global.name   // or window.name


But:

global.name === undefined


So output becomes:

hello undefined

CRITICAL LINE (memorize this)

Functions do NOT remember the object they came from.
They only care about how they are CALLED. */

