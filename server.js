var express = require("express");

var app = express();
var port = process.env.port || 8080;

app.set('views', './views');
app.set('view engine', 'jade');

app.use('/lib', express.static(__dirname + "/lib"));
app.use('/lib', express.static(__dirname + "/scripts"));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(port, function() {
    console.log("Server running on " + port);
});