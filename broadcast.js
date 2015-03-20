var app = require('express')();
var http = require("http").Server(app);
var io = require("socket.io")(http);

function broadcast(msg) {
	if (! msg) {
		return;
	}

	var content = msg.content;
	if (! content) {
		return;
	}

	var item = {
		timestamp: Date.now(),
		content: content
	};

	io.emit("msg", item);
};

io.on("connection", function(socket) {
	console.log("Got connection");
	socket.on("msg", broadcast);
});

http.listen(3000, function() {
	console.log("Listening on port 3000");
});
