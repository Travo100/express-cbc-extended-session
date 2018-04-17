var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

app.get("/", function(req, res){
    res.send("Hello world!");
});

app.listen(PORT, function(){
    console.log("Server is on PORT: " + PORT);
});