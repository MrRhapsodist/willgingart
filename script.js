var Request = false;
if (window.XMLHttpRequest) {
	Request = new XMLHttpRequest();
} else if (window.ActiveXObject) {
	Request = new ActiveXObject("Microsoft.XMLHTTP");
}
function ShowDiscount(php) {
	var response = document.getElementById('coupon').value;
	response = response.toUpperCase();
	if (Request) {
		Request.open("POST", "prices.php", true);
		Request.onreadystatechange = function() {
			if(response == "ARTFRIEND1") {
				onclick = document.getElementById('trgtDiv').innerHTML=Request.responseText;
			} else {
				onclick = document.getElementById('trgtDiv').innerHTML="<h3>This code is not valid.  Normal prices may still apply.</h3>";
			}
		}
		Request.send(null);
	}
}
function ShowPicture(url) {
	var width = 500;
	var height = 500;
	var left = (screen.width - width)/2;
	var top = (screen.height - height)/2;
	var params = 'width='+width+', height='+height;
	params += ', top='+top+', left='+left;
	params += ', directories=no';
	params += ', location=no';
	params += ', menubar=no';
	params += ', resizable=no';
	params += ', scrollbars=no';
	params += ', status=no';
	params += ', toolbar=no';
	newwindow=window.open(url, 'name', params);
	if(window.focus) {
		newwindow.focus();
	}
	return false;
}
