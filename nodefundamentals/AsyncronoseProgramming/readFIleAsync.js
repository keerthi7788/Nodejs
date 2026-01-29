const fs = require('fs')
const filePath ="../static/lengthyFile.txt";
const start =Date.now();
//reqfile: now i would be reading async now the low level construct comes into picture says hey once the file reading is completed i will give you the signal.
fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err){
        console.log("error reading file",err);
    }
    console.log(`File reading completed in ${Date.now() - start} ms`);
    for(let i=0;i<10;i++){
        console.log("doing work",i);
    }
});

//fistly procees the loop then the thing kept in block box like from is err to print logg error will execute later
// free up file,  feed of the cpu i can let the program runs
// This already tells us something very important:

//  Node.js did NOT wait for the file read to finish
// Your program is non-blocking
// ENOENT = Error NO ENTity

// In simple English:

// “Hey Node, I tried to open this file, but it does NOT exist at that path.”