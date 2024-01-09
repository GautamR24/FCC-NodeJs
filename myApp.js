/*testing git push to replit*/
let express = require("express");
let app = express();
//adding first function
app.get("/", function (req, res) {
  var absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

//mounting the middleware
app.use("/public", express.static(__dirname + "/public"));
module.exports = app;
