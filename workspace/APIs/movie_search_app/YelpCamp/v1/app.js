var express=require("express");
var app=express();

app.set("view engine","ejs");

app.get("/APIs/movie_search_app/YelpCamp/v1/",function(req,res){  
    
   res.render("landing"); 
});



app.listen(process.env.PORT,process.env.IP,function(){
    console.log("The YelpCamp server has started");
});