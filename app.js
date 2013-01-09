var fs = require('fs');

require('http').createServer(function(req, res) {

  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'video/x-m4v'});

    var rs = fs.createReadStream(__dirname + '/video.m4v');
    rs.pipe(res);

    rs.on('data', function(d) {
      console.log('sent', d.length, 'bytes')
    });
    rs.on('end', function() {
      console.log('read stream ended.');
    });

  } else {
    res.writeHead(404);
  }

}).listen(4000);
