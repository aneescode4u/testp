var express=require("express");
var app=express();


var bodyParser=require("body-parser");


var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/restful_blog_app") 


app.set=("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


var blogSchema=new mongoose.Schema({
        title:String,
        image:String,
        body:String,
        created:{type:Date, default:Date.now}
    });    
var Blog= mongoose.model("Blog",blogSchema);
    
    Blog.create(
    {
        title: "Test blog",
        image:"https://images.unsplash.com/photo-1545382142-c3d9b8168eeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
        body:"My first Blog Post"
        
    });
    

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("SERVER IS RUNNING");
});
    
    
    