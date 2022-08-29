
const inputIn = document.querySelector('.age');
const button = document.querySelector('button');

button.onclick = function () {
	let num = +inputIn.value;
	
	if (num >= 16 && num < 100 ) {
		console.log('Welcom!');
	} 
	else if (num > 100) {
		console.log('Wow, man!');
	}
	else {
		console.log('Get out!');		
	}
}

switch (num) {
	case 15:
		console.log('Get out!');
		break;
	case 17:
		console.log('Welcom!');
		break;

	default:
		console.log('Ook');
		break;
}