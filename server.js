//Requires 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//initializing express
var app = express();

//Assigning port
var PORT = process.env.PORT || 3000;

//middleware for data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes pulled from routing folder
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);



//Listining to port
app.listen(PORT, function(){
    console.log("Server starting in port 3000");
});