var express=require("express");
var app=express();
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
         name:"CorbiWood",image:"https://images.unsplash.com/photo-1520932222620-1ca4a3635637?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"} ,
        { name :"CorbiLam",image:"https://images.unsplash.com/photo-1515742438234-bef8428eb817?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1428&q=80"},
         {name :"CorbiPly",image :"https://c.pxhere.com/photos/02/99/trees_wood_yellow_wood_oak_sandalwood_teak_wood_grain-1161832.jpg!d"},
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

app.get("/campgrounds/new",isLoggedIn,function(req,res)
{
 res.render("new.ejs");
})
app.get("/login",function(req,res){
    res.render("login") });
app.post("/login",passport.authenticate ("local",{
  successRedirect:"/campgrounds/new",
  failureRedirect:"/login"
}),function(req,res){
 
} )  ;
//auth routes


app.get("/register",function(req,res){
   res.render("register"); 
});
app.get("/careers",function(req,res){res.render("careers")});
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

 app.listen(process.env.PORT,process.env.IP,function(req,res){
     console.log("The Yelpcamp has Started");
     
 })