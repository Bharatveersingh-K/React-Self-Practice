const express=require('express');
const app=express();



 require("dotenv").config();
 const PORT=process.env.PORT || 4000;

 app.use(express.json());


 const todoRoutes= require("./routes/todos");
 app.use("/api/v1",todoRoutes)


 app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`)
 })

 //connect to the  database
 const dbConnect=require("./config/database");
 dbConnect() 

 //default Route
  app.get('/',(req,res)=>{
   res.send(`<h1>This is Home Page Baby</h1>`)

 }
 )