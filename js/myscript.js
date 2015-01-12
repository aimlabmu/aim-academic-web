// $( "#proj2" ).hide();
// $( "#proj3" ).hide();
$( ".proj1LINK" ).click(function(event) {
	event.preventDefault();
	$( "#proj1" ).show("slow");
	$( "#proj2" ).hide("slow");
	$( "#proj3" ).hide("slow");
});
$( ".proj2LINK" ).click(function(event) {
	event.preventDefault();
	$( "#proj2" ).show("slow");
	$( "#proj1" ).hide("slow");
	$( "#proj3" ).hide("slow");
});
$( ".proj3LINK" ).click(function(event) {
	event.preventDefault();
	$( "#proj3" ).show("slow");
	$( "#proj2" ).hide("slow");
	$( "#proj1" ).hide("slow");
});