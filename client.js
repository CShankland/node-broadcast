var socket = io("172.16.0.20:3000");

var output = document.querySelector("#output");
var input = document.querySelector("#input");
var submit = document.querySelector("#submit");

submit.onclick = function () {
	var content = input.value;
	socket.emit("msg", {
		content: content
	});
};

socket.on("msg", function receivedMessage(data) {
	var ts = new Date(data.timestamp);
	var content = data.content;

	var formattedOutput = "<span class='ts'>" + ts.toTimeString() + "</span> - <span class='msg'>" + content + "</span><br />";
	output.innerHTML += formattedOutput;
});
