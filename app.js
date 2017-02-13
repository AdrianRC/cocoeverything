var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});

app.get("*", function (req, res){
    res.send("Sorry, page not found.");
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});