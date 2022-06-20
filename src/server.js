// install and import express
const express = require("express")
let app = express();
app.use(express.json())
var file=require("fs");
const filejson="./assets/user.json";
const file_json=require(filejson)


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
        file.readFile(_dirname+"/assets/users.html","utf8",function(error,text){
            if(error){
                return res.send(error)
            }
            return res.send(text);
        })
    }
    catch(error){
        return res.send(error)
    }
})


app.get("/users",async(req,res)=>{
    try{
        file.readFile(_dirname+"/assets/user.json",function(error,text){
            if(error){
                return res.send(error)
            }
            return res.send(text);
        })
    }catch(error){
        return res.send(error)
    }
})


// Note: Do not remove this export statement
module.exports = app;
