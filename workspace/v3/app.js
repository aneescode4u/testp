var express = require("express");
var app = express();
var PORT = 3000;
app.use(express.static("./app/public"));