
const express =require('express')

const app = express();
/* 
middleware:app.listen will list what is url what is method and  then takes the appropriate call back when ever the req comes express validates like whre it should go 
- whenever we pass the middleware we have to pass this to the next middleware

app.use(): we can use which middleware to use

*/
const logger = (req,res,next)=> {
    console.log(`${req.method} ${req.url}`);
    next();
}

app.get('/api/v1/course-rating',logger, (req, res) => {
    console.log(req.query);
    res.send("Course rating API");
}); 


//environmental variables: PORT=3000 node app.js so i can run before the  app starts
// when ever we run some f the context should be pass from the outside.
// process.env.PORT


const PORT = process.env.PORT || 3000;
app.get('/',(req,res) => {
    console.log("Request received at / endpoint");
    res.send("hellow world")

})
 app.listen(PORT,()=>{
   console.log("Server is running on port 3000");   
 })

 /* y do we need port:
 - ip identofies the multiple running service os should send req to port
 -To specify the network port on which the server listens for incoming requests.
 */
app.get('/api/v1/course-rating',(req,res) => {
    console.log("Request received at /api/v1/course-rating endpoint");
    res.send("Course rating API");
})

app.get('/api/v1/course-rating', (req, res) => {
    console.log("Request received at /api/v1/course-rating endpoint");
    res.send("Course rating API");
});
//generally we have env file so we will use env to keep all the env variables.
/* 
dotenv:any componect using env should have acces to the file
it will read and attachtes to the file while processing
-process is an object which is avilable globally in node js it has all the nev varibale files
note: shoud we commit to git , it should never be commited since it has all sensible information




*/
// //