// document.querySelector('.b-1').onclick = () =>{}

function f1(){
	let a = document.querySelectorAll('input[type="radio"]');
	
	for(let i = 0; i < a.length; i++){
		if (a[i].checked){
			console.log(a[i].value);
		}
	}
};


document.querySelector('.b-1').onclick = f1;