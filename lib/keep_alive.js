var http = ('http');

http.createServer(function (req, res) {
  res.write('Nexus Bot is Listening...')
  res.end();
}).listen(8080);
