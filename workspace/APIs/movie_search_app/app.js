var express=require("express");
var app=express();
var request=require("request");
app.get("/",function(req,res){
    res.render("search");
}
);
app.get("/results",function(req,res){
request("http://www.omdbapi.com/?s=&apikey=thewdb",function(error,response,body){
        var query=req.body.search;
        var url="http://www.omdbapi.com/?apikey=thewdb&s="+query;
        if (!error&&response.statusCode==200){
          var data =JSON.parse(body)
           res.render("results",{data:data});
           
        }
    });
});
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("MOvie app has started");
})