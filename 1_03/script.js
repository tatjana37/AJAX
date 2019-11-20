
	var request;
	if (window.XMLHttpRequest) {
request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET',  'data.txt', false);
	request.onreadystatechange = function() {
		if ((request.readyState===4) && (request.status===200)) {
		console.log(request);
		document.writeln(request.responseText);
	}

}
request.send();