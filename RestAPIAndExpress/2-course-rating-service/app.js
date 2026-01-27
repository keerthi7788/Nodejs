

const express =require('express')

const app=express();
app.get('/',(req,res) => {
    console.log("Request received at / endpoint");
    res.send("hellow world")

})
 app.listen(3000,()=>{
   console.log("Server is running on port 3000");   
 })

 /* y do we need port:
 - ip identofies the multiple running service os should send req to port
 -To specify the network port on which the server listens for incoming requests.
 */