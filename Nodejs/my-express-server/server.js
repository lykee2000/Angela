//jshing esversion : 6
const express = require("express")

const app = express();

app.get("/",function(req,res){
  res.send("<h1>hello</h1>");
});

app.get("/contact",function(req,res){
  res.send("Contack me at: 111@gmail.com");
});

app.get("/about",function(req,res){
  res.send("My name is yoong and I love beer")
});

app.get("/hobbies",function(req,res){
  res.send("<ul><li>Coffee</li><li>Beer</li></ul>")
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
