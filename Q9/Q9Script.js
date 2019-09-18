
$('#create').click( function() {
	// body...

	if($("#red").prop('checked') && $("#blue").prop('checked') && $("#yellow").prop('checked')) {
		$('#UL').append('<li class = "black">' + "black" );
		
	} else if ($("#red").prop('checked') && $("#blue").prop('checked')){
		$('#UL').append('<li class = "purple">' + "Purple" );
			
	}else if($("#yellow").prop('checked') && $("#blue").prop('checked')) {

		$('#UL').append('<li class = "green">' + "Green" );

	} else if($("#yellow").prop('checked') && $("#red").prop('checked')) {

		$('#UL').append('<li class = "orange">' + "Orange" );
	} else if($("#yellow").prop('checked')) {

		$('#UL').append('<li class = "yellow">' + "Yellow" );
	} else if($("#red").prop('checked')) {

		$('#UL').append('<li class = "red">' + "Red" );
	} else if($("#blue").prop('checked')) {

		$('#UL').append('<li class = "blue">' + "Blue" );
	} 

});

$('#delete').click(function() {
	$("UL").remove()
})

