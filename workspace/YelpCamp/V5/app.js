var express=require("express");
var app=express();

var fs = require('fs');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');


var mongoose=require("mongoose");
var passport=require("passport");

var bodyParser=require("body-parser");
var User=require("./model/user");

var LocalStrategy=require("passport-local");
var passportLocalMongoose=require("passport-local-mongoose");


app.use(require("express-session")({
 secret:"page is used to addd sheet models",
 resave:false,
 saveUninitialized:false
}));

mongoose.connect("mongodb://localhost/auth_demo_app");


app.use(bodyParser.urlencoded({extended:true}));

var url = require('url');
var PORT = 3000;
app.use(express.static("./app/public"));

app.use(express.static("public"));
app.use(express.static(__dirname + '/images'));

app.use(express.static(".app/views/public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//routes


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

app.get("/campgrounds",isLoggedIn,function(req,res){

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
app.get("/login",function(req,res){
    res.render("login") });
app.post("/login",passport.authenticate ("local",{
  successRedirect:"/campgrounds",
  failureRedirect:"/login"
}),function(req,res){
 
} )  ;
//auth routes


app.get("/register",function(req,res){
   res.render("register"); 
});
app.post("/register",function(req,res){
  req.body.username
  req.body.password
  User.register(new User({username:req.body.username}), req.body.password, function(err,user){
  if(err){
   console.log(err);
   return res.render('register');
  }
 passport.authenticate("local")(req,res,function(){res.redirect("/campgrounds")})
 })
});
app.get("/logout",function(req,res){
 req.logout();
 res.redirect("/Home")
})
function isLoggedIn(req,res,next){
 if(req.isAuthenticated()){
  return next();
 }
 res.redirect("/login")
}
app.post('/contact', function(req, res) {
    if(req.body.mail == "" || req.body.subject == "") {
        res.send("Error: Email & Subject should not be Blank");
        return false;
    }

var smtpTransport = nodemailer.createTransport("SMTP", {
    host: "smtp.gmail.com", 
    secureConnection: true, 
    port: 465, 
       
});

var mailOptions = {
    from: "Node Emailer - <email@gmail.com>",
    to: req.body.email, 
    subject: req.body.subject + " -",
    html: "<b>"+req.body.description+"<b>"
}
smtpTransport.sendMail(mailOptions, function(error, response) {
    if (error) {
        res.send("Email could not be sent due to error:" +error);
    }else {
        res.send("Email has been sent successfully");
    }
});
});

app.listen(process.env.PORT || 3000, function() {
    console.log("LISTENING!");
});

 app.listen(process.env.PORT,process.env.IP,function(req,res){
     console.log("The Yelpcamp has Started");
     
 })