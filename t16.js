// Task1
// При нажатии b-1 выполняете функцию f1. Функция должна вывести в out-1 значение сохраненное под ключем two из массива a1. Возвратите это значение.

let a1 = {
	"one": 15,
	two1: 16,
	"five": 20,
}

let out = document.querySelector('.out-1');
let out1 = ' ';

document.querySelector('.b-1').onclick = () => {
	for (let key in a1) {
		out1 += a1[key] + '_';
	}
	out.innerHTML = out1;
}
console.log( a1 );




