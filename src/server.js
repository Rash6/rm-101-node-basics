// install and import express
const express = require("express")
let app = express();
app.use(express.json())
var file=require("fs");



// Code here
app.listen(8000,async()=>{
    try{
        console.log("port 8000 is live")
    }catch(err){
        console.log(err)
    }
})

app.get("/",async(req,res)=>{
    try{
        file.readFile(__dirname+"/assets/users.html","utf8",function(error,message){
            if(error){
                return res.send(error)
            }
            return res.send(message);
        })
    }
    catch(error){
        return res.send(error)
    }
})


app.get("/users",async(req,res)=>{
    try{
        file.readFile(__dirname+"/assets/user.json",function(error,message){
            if(error){
                return res.send(error)
            }
            return res.send(message);
        })
    }catch(error){
        return res.send(error)
    }
})


// Note: Do not remove this export statement
module.exports = app;
