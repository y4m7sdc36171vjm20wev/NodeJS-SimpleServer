var dir = process.argv.slice(2);
if(dir[0] == undefined){
    dir[0] = ".";
}
if(dir[1] == undefined){
    dir[1] = 69;
}
var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')
 
var serve = serveStatic(`${dir[0]}`, { 'index': ['index.html'] })

var server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
})
server.listen(dir[1])
console.log('Server is running on port '+ `${dir[1]}` +' from ' + `${dir[0]}`)
