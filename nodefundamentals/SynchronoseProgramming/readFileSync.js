const fs = require('fs')
const filePath ="../static/lengthyFile.txt";
const start =Date.now();
const data = fs.readFileSync(filePath,'utf-8');

console.log(`File read in ${Date.now - start} ms`);
