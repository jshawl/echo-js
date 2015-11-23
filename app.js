var echo = require("./src/echo")

echo.get("/", function(req, res){
  res.end("radical")
})