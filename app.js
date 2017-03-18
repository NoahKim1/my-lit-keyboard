document.body.addEventListener('keydown', addStyling);
document.body.addEventListener('keyup', removeStyling);
function addStyling(e){
	 console.log(e);
	// console.log(e.key);
	var id = e.key;
	var element = document.getElementById(id);
	// console.log(element);
	element.classList.add('active');
	var audio = document.getElementById("spongebob");
	audio.play();

}

function removeStyling(e){
	console.log("removeStyling");
	console.log(e);
	var id = e.key;
	var element = document.getElementById(id);
	element.classList.remove('active');
	var audio = document.getElementById("spongebob");
	audio.pause();
}

// function upKey(e) {
// 	console.log("upKey")
// 	console.log(e)
// 	var id = e.key;
// 	var element = document.getElementById(id);
	
// }
