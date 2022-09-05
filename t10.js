// Task1
// Напишите функцию t1, которая при нажатии кнопки выводит в .out-1 переменную a1.


let out1 = document.querySelector('.out-4');
let a1 = 'Hi!'

function t1() {
	out1.innerHTML = a1;
}


document.querySelector('.button1').onclick = t1;

// Task2
// Изменим задачу 1. Сейчас она только выводит переменную в заранее заданный блок. Давайте сделаем так, чтобы функция, была более гибкой. Пусть теперь функция t2 возвращает (return) переменную a2.Поскольку функция возвращает переменную, то имя функции со скобками (вызов функции) можно встраивать в выражения. Обратите внимание, как изменяется вызов функции теперь.


let a2 = 'Hello!'

function t2() {
	return a2;
}

console.log(t2());


// Task3
//Наша предыдущая функция, сильно все еще зависима от внешних переменных. Давайте сделаем ее более универсальной. Пусть функция t3 принимает 2 аргумента и возвращает (return) их произведение. ентов a, b. Протестируем функцию с помощью кнопок .b-3-1

let out2 = document.querySelector('.out-5');

function t3() {
	let in1 = document.querySelector('.input1').value;
	let in2 = document.querySelector('.input2').value;

	out2.innerHTML = in1 * in2
}

document.querySelector('.b-3-1').onclick = t3;




