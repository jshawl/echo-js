module.exports = (function(){
  var http = require("http")
  var port = 8080
  var listeners = {
    GET: {}
  }
  var server = http.createServer(function(req, res){
    console.log(req.method, req.url)
    try {
      listeners[req.method][req.url](req, res)
    } catch(e) {
      console.dir(e) 
    }
  })
  server.listen(port, function(){
    console.log("Server listening on: http://localhost:"+port)
  })
  return {
    get: function(path, cb){
      listeners.GET[path] = cb
    }
  }
})()
