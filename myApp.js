/*testing git push to replit*/
let express = require('express');
let app = express();

//mounting the middleware
app.use('/public', function(req, res) {
  var absolutePath = __dirname + '/public';
  express.static(absolutePath);
})
//adding first function
app.get('/', function(req, res) {
  var absolutePath = __dirname + '/views/index.html'
  res.sendFile(absolutePath)
})



































module.exports = app;
