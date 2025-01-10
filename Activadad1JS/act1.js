let count;

count = 0;

function disminuir(){
	count --;
	document.querySelector("#contadortexto").textContent = count;
	changeColor();
}
function resetear(){
	count = 0;
	document.querySelector("#contadortexto").textContent = count; 
	changeColor();
}
function aumentar(){
	count ++;
	document.querySelector("#contadortexto").textContent = count; 
	changeColor();
}

function changeColor(){
	if (count > 0){
		document.querySelector("#contadortexto").style.color = "green";
	}else if(count < 0){
		document.querySelector("#contadortexto").style.color = "red";
	}else{
		document.querySelector("#contadortexto").style.color = "black";
	}
}