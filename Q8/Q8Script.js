var input = document.getElementById("input")
var color = document.getElementById("color")
// console.log(input.text(), color.value());

$('#btn').click(function () {

	// body...
	if($('#color').val() === "red"){
		$('#UL').append('<li class = "red"' + $('#input').val())
	} else if($('#color').val() === "yellow"){
		$('#UL').append('<li class = "yellow"' + $('#input').val())
	} else if($('#color').val() === "blue"){
		$('#UL').append('<li class = "blue"' + $('#input').val())
	} else{
		
	}
})
