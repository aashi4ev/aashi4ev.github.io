function helloWorld() {
	var x = 5
	var y = "aashi"
	y = 10
	console.log("obama")
}

funtion handleClick() {
	var text = $(this).text()
	alert(text)
}


$(document).ready(function() {
	$(".panel").click(handleClick)
})