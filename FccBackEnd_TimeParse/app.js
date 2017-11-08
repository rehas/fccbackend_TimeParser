var express = require("express");
var port = process.env.PORT;
var app = express();
var tp = require("./timeParse.js");
var path = require("path");


console.log(port);

app.get('*', function (req, res) {
    
    var queryKey = req.query.key;
    var ou = req.originalUrl;
    //console.log(query.toString());
    //console.log(queryKey);
    console.log(ou)
    
    var result = tp(ou);
    
    if (tp(ou) === "./index.html") {
        
        res.sendFile(path.join(__dirname+'/index.html'));
        return;
    
    }

    res.send(tp(ou));
});

app.listen(port);