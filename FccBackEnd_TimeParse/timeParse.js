var moment = require("moment");

module.exports = function (str) {
    
    var inp = decodeURI(str).slice(1);
    
    if (inp.length < 2) {
        return "./index.html"
    }
    
    console.log("Is this a date: " + moment(inp, "MMMM DD YYYY", true).isValid());
    
    if (moment(inp, "MMMM DD YYYY", true).isValid()) { 
        
        var udate = moment(inp, "MMMM DD YYYY").valueOf();

        return {
            unix : udate/1000,
            natural : inp
        }

    }


    console.log(inp);

    if (!isNaN(inp)) { 
        
        var rdate = moment.unix(parseInt(inp));
        
        var dformatted = rdate.format("MMMM DD YYYY");

        console.log("rdate: " + rdate.toDateString);
        
        return {
            unix: inp,
            natural : dformatted
            //'rdate' : rdate

        };

    }
    return "return: " + inp;

};