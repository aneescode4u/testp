var express=require("express");
var app=express();
app.get("/",function(req,res){
res.send("hi there!");
});
app.listen(process.env.PORT,process.env.IP);
console.log("Server Has started");
app.get("/bye",function(req,res){
res.send("Goodbye!");
});
app.get("/dog",function(req,res){
    console.log("some one has made a request to /dog")
res.send("MEOW");
});

app.get("/r/:subredditName",function(req,res){
    console.log("req.params")
res.send("welcome to a subreddit");
});



app.get("/r/:subredditName",function(req,res){
    console.log("req.params")
res.send("welcome to a subreddit");
});
app.get("*",function(req,res){
res.send("you are a star!");
});