function timer() {
		var date = new Date();
		var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
 		document.getElementById("timeout").innerHTML = time;
};

setInterval("timer()", 500);