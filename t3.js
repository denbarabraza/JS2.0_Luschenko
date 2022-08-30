// Task 1
// При нажатии кнопки .b-1 срабатывает функция f1. Функция должна прочитать содержимое .i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в .out-1.

function f1() {
	let a = +document.querySelector('.i-1').value;
	let out = document.querySelector('.out-1');

	if (a == 4) {
		out.innerHTML = true;
	} else {
		out.innerHTML = false;
	}
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки .b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в .out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let a21 = 101;
let a22 = 25;

function f2() {
	let out = document.querySelector('.out-2');

	if (a21 > a22) {
		out.innerHTML = a21;
	} else {
		out.innerHTML = a22;
	}
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// Даны 2 input - .i-31 и .i-32, оба - input[type=number]. При нажатии кнопки .b-3 срабатывает функция f3. Функция должна сравнить числа из input, вывести в .out-3 большее число. Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

function f3() {
	let a = +document.querySelector('.i-31').value;
	let b = +document.querySelector('.i-32').value;
	let out = document.querySelector('.out-3');

	if (a > b) {
		out.innerHTML = a;
	} else if (a === b) {
		out.innerHTML = 'a=b';
	} else{
		out.innerHTML = b;
	}
}

document.querySelector('.b-3').onclick = f3;

