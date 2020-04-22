var express = require("express");
var app = express();

app.get('/', (req,res)=>{
  res.render("home.ejs");
});

app.get('/fallinlove/:thing', (req,res)=>{
  var thing = req.params.thing;
  //res.send("you fell in love with "+ thing);
  res.render("love.ejs", {thingVAR: thing});  // thingVAR is being filled by thing in love.ejs
})
app.listen(3000, () => {
  console.log("server connected!");
});