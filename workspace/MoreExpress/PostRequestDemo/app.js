var express=require("express");
var app=express();
var bodyParser=require("body-parser");

var friends=["Tony","miranda","justin","Anees","Lilly"];
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
}); 

app.post("/addfriend", function(req,res){
        console.log(req.body.newfriend);
        var newFriend=req.body.newfriend;
        friends.push(newFriend);
        res.redirect("/friends");
});
app.get("/friends", function(req,res){
    var friends=["Tony","miranda","justin","Anees","Lilly"];
  res.render("friends",{friends:friends});

});

app.listen(process.env.PORT,process.env.IP,function(){ 
   console.log("server started!");   
});
