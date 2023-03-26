


function plus() {
	var x = parseFloat(document.getElementById('xx').value);
	var y = parseFloat(document.getElementById('yy').value);
	var z=x+y;
	document.getElementById('result').innerHTML = z;
	return z;
}
function minus() {
	var x = parseFloat(document.getElementById('xx').value);
	var y = parseFloat(document.getElementById('yy').value);
	var z=x-y;
	document.getElementById('result').innerHTML = z;
	return z;
}
function times() {
	var x = parseFloat(document.getElementById('xx').value);
	var y = parseFloat(document.getElementById('yy').value);
	var z=x*y;
	document.getElementById('result').innerHTML = z;
	return z;
}
function by() {
	var x = parseFloat(document.getElementById('xx').value);
	var y = parseFloat(document.getElementById('yy').value);
	var z=x/y;
	document.getElementById('result').innerHTML = z;
	return z;
}