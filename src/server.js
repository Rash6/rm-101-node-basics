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



// Note: Do not remove this export statement
module.exports = app;
