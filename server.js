// - Filename: Pretty sure you can read it in the title bar
// - Author's Name: John Horne
// - Website Name: comp2068-asgn-1.1
// - File Description: Runs the server 

var express = require("express");

var app = express();
var port = process.env.port || 8080;

app.set('views', './views');
app.set('view engine', 'jade');

app.use('/lib', express.static(__dirname + "/public/lib"));
app.use('/lib', express.static(__dirname + "/public/scripts"));


// Main navigation
app.get('/', function(req, res) {
    res.render('index');
}).get('/projects', function(req, res) {
    res.render('projects', {"local" : {"title" : "Projects"}});
}).get('/services', function(req, res) {
    res.render('services');
}).get('/about', function(req, res) {
    res.render('about');
}).get('/contact', function(req, res) {
    res.render('contact');
});


app.listen(port, function() {
    console.log("Server running on " + port);
});