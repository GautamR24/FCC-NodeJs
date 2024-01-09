/*testing git push to replit*/
let express = require("express");
let app = express();
//adding first function
app.get("/", function(req, res) {
  var absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

//mounting the middleware
app.use("/public", express.static(__dirname + "/public"));

//creating the json route

app.get('/json', function(res) {
  res.json({ message: "Hello json" });
})
module.exports = app;
