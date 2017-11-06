var express = require("express");

var port = process.env.PORT;

var app = express();

console.log(port);

app.get('/', function (req, res) {
    res.send("FCC App 1");
});

app.listen(port);