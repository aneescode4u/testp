var express=require("express");
var app=express();

app.use(express.static("public"));
app.set("view engine","ejs");
app.use(express.static("./app/public"));

app.get("/",function(req,res)
{
    res.render("home");
    
    
});

app.get("/fallinlovewith/:thing",function(req,res){
   var thing=req.params.thing;
   res.render("loves",{thingVar:thing});
});
app.get("/posts",function(req,res){
    var posts=[
        {title:"Post 1",author:"Susy"},
        {title:"My adorable pet bunny",author:"Charlie"},
        {title:"can you belive this pomsky?",author:"colt"}
        ];

    res.render("posts",{posts:posts})
})
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server is listening");
});
