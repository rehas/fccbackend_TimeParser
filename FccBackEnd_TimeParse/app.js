var express = require("express");
var port = process.env.PORT;
var app = express();
var tp = require("./timeParse.js");


console.log(port);

app.get('*', function (req, res) {
    
    var queryKey = req.query.key;
    var ou = req.originalUrl;
    //console.log(query.toString());
    //console.log(queryKey);
    console.log(ou)

    res.send(tp(ou));
});

app.listen(port);