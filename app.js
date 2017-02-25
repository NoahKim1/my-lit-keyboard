document.body.addEventListener('keydown', addStyling);
document.body.addEventListener('keyup', removeStyling);
function addStyling(e){
	 console.log(e);
	// console.log(e.key);
	var id = e.key;
	var element = document.getElementById(id);
	// console.log(element);
	element.classList.add('active');

}

function removeStyling(e){
	console.log("removeStyling");
	console.log(e);
	var id = e.key;
	var element = document.getElementById(id);
	element.classList.remove('active');
}