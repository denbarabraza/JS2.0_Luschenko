console.log("Hello, Den");

let inputIn = document.querySelector('.input-in'); //input
let button = document.querySelector('button'); //button

button.onclick = function () {
	//кнопка будет нажата
	let b = +inputIn.value;
	console.log(b + 10);
	inputIn.value = '';
}