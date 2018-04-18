var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var PORT = process.env.PORT || 8080;

var usersArray = [
    {
        "name": "Travis",
        "email": "travo100@gmail.com"
    },
    {
        "name": "Neeha",
        "email": "neehahaha@aol.com"
    },
    {
        "name": "Chris",
        "email": "chriscrossapplesauce@hotmail.com"
    }
];

app.get("/", function(req, res){
    // res.send("Hello world!");
    res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/contact", function(req, res){
    res.sendFile(path.join(__dirname, "views/contact.html"));
});

app.get("/users", function(req, res){
    res.sendFile(path.join(__dirname, "views/users.html"));
});

app.get("/api/users", function(req, res){
    res.json(usersArray);
});

app.post("/api/new", function(req, res){
    var user = req.body;

    usersArray.push(user);

    res.json({
        success: true,
        statusCode: 200,
        message: "Added new user!",
        data: user
    });
});

app.listen(PORT, function(){
    console.log("Server is on PORT: " + PORT);
});