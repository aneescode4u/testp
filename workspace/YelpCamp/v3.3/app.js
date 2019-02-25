var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var User=require("./model/user");



app.use(require("express-session")({
 secret:"page is used to addd sheet models",
 resave:false,
 saveUninitialized:false
}));


app.use(bodyParser.urlencoded({extended:true}));

var url = require('url');
var PORT = 3000;
app.use(express.static("./app/public"));

app.use(express.static("public"));
app.use(express.static(__dirname + '/images'));

app.use(express.static(".app/views/public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));


//routes

app.get("/",function(req,res){
    res.render("landing") });
    app.get("/Home",function(req,res){
    res.render("landing") });

 app.get("/contact",function(req,res){
    res.render("contact") });
    
    app.get("/plywood",function(req,res){
    res.render("plywood")});
    app.get("/WPC",function(req,res){
    res.render("WPC") });
     app.get("/ACP",function(req,res){
    res.render("ACP") });
app.get("/ACP#Citybond",function(req,res){
    res.render("ACP#cityBond") });
    app.get("/HPL",function(req,res){
 res.render("HPL")});
 

app.get("/about",function(req,res){
 res.render("about")});
 
app.get("/products",function(req,res){
 res.render("products")});
 
 app.get("/contents",function(req,res){
 res.render("contents")});
 
 
 
 
 
 
 
 
 var campgrounds=[
       {
         name:"Wayanad",image:"https://images.unsplash.com/photo-1528433556524-74e7e3bfa599?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4479c0b22e5c8a8ed5577c39f63b27b&auto=format&fit=crop&w=1500&q=80"} ,
        { name :"Munnar",image:"https://images.unsplash.com/photo-1470123808288-1e59739dea12?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=65030cebb96d5b92b35bc2141a226edc&auto=format&fit=crop&w=751&q=80"},
         {name :"Kovalam",image :"https://images.unsplash.com/photo-1439507912154-033b3644a7aa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6455df7e8c8b25cffd90bfca9d55881&auto=format&fit=crop&w=752&q=80"},
           ]
 app.get("/",function(req,res){
    res.render("landing") });
    app.get("/Home",function(req,res){
    res.render("landing") });

 app.get("/contact",function(req,res){
    res.render("contact") });
     app.get("/ReachUs",function(req,res){
    res.render("ReachUs") });


app.get("/about",function(req,res){
 res.render("about")});

app.get("/campgrounds",function(req,res){

   res.render("campgrounds",{campgrounds:campgrounds});
    
});
app.post("/campgrounds",function(req,res){
 var name=req.body.name;
 var image=req.body.image;
 var newCampground={name:name,image:image};
 campgrounds.push(newCampground);
 res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req,res)
{
 res.render("new.ejs");
})
    
    
  

app.get("/register",function(req,res){
   res.render("register"); 
});



app.get("/careers",function(req,res){res.render("careers")});


 app.listen(process.env.PORT,process.env.IP,function(req,res){
     console.log("The Yelpcamp has Started");
     
 })