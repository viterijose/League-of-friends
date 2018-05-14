var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var friends = [];//empty array for friend objects

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });