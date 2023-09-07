const express = require('express');
const fs = require('fs'); // You need to require the 'fs' module to read and write files.
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    fs.readFile('./lecture.txt', { encoding: "utf-8" }, (err, data) => {
        if (err) {
            res.send(`<h1>Please Try again Later</h1>`);
        } else {
            res.send({ "data": data });
        }
    });
});



app.get("/students",(req,res)=>{
    fs.readFile("./data.json",{encoding:"utf-8"},(err,data)=>{
       const parsed_data=JSON.parse(data);
       const students_data=parsed_data.students;
       const result=JSON.stringify(students_data)
       res.send(result)
    })
     
    })






app.post("/addStudent", (req, res) => {
   const add_student=req.body;
   console.log(add_student)
 
   fs.readFile("./data.json",{encoding:"utf-8"},(err,data)=>{
    const existing_data=JSON.parse(data);
     const student_data=existing_data.students
    student_data.push(add_student);
    console.log(existing_data);
   const result=JSON.stringify(existing_data);
   fs.writeFile("./data.json",result,{encoding:"utf-8"},(err)=>{
     console.log("data Updated successfully")
 })
   
 })
 res.send("data recieved")
});

app.patch("/modifystudent",(req,res)=>{
    console.log(req.query);
    res.send("work in progres")
})
app.delete("/deletestudent/:ID",(req,res)=>{
    console.log(req.params)
    console.log("work in progress to delet the student data")
})



   
    
  








 
app.listen(8000, () => {
    console.log('Welcome to the server 8000');
});
