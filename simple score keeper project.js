
var but = document.querySelectorAll('button');
var body = document.querySelector('body');
var playerOne = document.querySelector('#s1');
var playerTwo = document.querySelector('#s2');
var playing = document.querySelector("#s3");
var input = document.querySelector("input");

but[0].addEventListener("click", function(){
	//var a = Number(document.querySelector("#s1").innerHTML);

	if (playing.innerHTML == playerOne.innerHTML && playing.innerHTML !=0) {
		playerOne.classList.add("stopColor");	
		but[1].disabled = true;
	}
	 else {
		playerOne.innerHTML = Number(playerOne.innerHTML)+1;
		}
	});

but[1].addEventListener("click", function(){
	if (playing.innerHTML == playerTwo.innerHTML && playing.innerHTML !=0){
		playerTwo.classList.add("stopColor");
		but[0].disabled = true;
	}
	else{
	playerTwo.innerHTML = Number(playerTwo.innerHTML)+1;
	}
	});
but[2].addEventListener("click", function(){
	playerOne.innerHTML = 0;
	playerTwo.innerHTML = 0;
	playerOne.classList.remove("stopColor");
	playerTwo.classList.remove("stopColor");
	but[0].disabled = false;
	but[1].disabled =false;
	playing.innerHTML =0;
	input.value= 0;
	});
 

input.addEventListener("change", function(){
	playing.innerHTML=Number(this.value);

})