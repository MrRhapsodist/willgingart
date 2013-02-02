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
			if(response == "UNIVERSALBEAGLE") {
				onclick = document.getElementById('trgtDiv').innerHTML=Request.responseText;
			} else {
				onclick = document.getElementById('trgtDiv').innerHTML="<h3>This code is not valid.  Normal prices may still apply.</h3>";
			}
		}
		Request.send(null);
	}
}
function ShowPicture(url) {
	newwindow=window.open(url, 'name', 'height=500, width=500');
	if(window.focus) {
		newwindow.focus()
	}
	return false;
}
