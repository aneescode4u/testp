var express=require("express");
var app=express();

app.get("/",function(req,res){
res.send("hi there horray !");
});

app.listen(process.env.PORT,process.env.IP,function(){
console.log("Now serving your app");
});
app.get("/speak/:animal",function(req,res){
    var sounds={
        pink:"oink",
        cow:"moo",
        dog:"woof woof",
        cat:"i hate you human"
    }
        
    var animal=req.params.animal.toLowerCase();
    var sound=sounds[animal];
      
    res.send("the"+animal+"says"+sound+"'");
});
app.get("/repeat/:message/:times",function(req,res){
var message=req.params.message;
var times=Number(req.params.times);
var result=""; 
for(var i=0;i<times;i++)
{
    result+=message+"    ";
}
    res.send(result);
});


app.get("*",function(req,res){
res.send("sorry,page not found");
});

    