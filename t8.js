// Task 1
// С помощью вложенных циклов, нарисуйте строку:

// ***_***_***_

// где звездочкa рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.

let out = document.querySelector('.out-1');
console.log(out);

for (let i = 0; i < 3; i++) {
	for (let k = 0; k < 3; k++) {
		out.innerHTML += '*';
	}
	out.innerHTML += '_';
}


// Task 2
// С помощью вложенных циклов, нарисуйте строку:

// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифру и перенос строки br, внутренний - *_, и после этого внешний - знак переноса.

let out2 = document.querySelector('.out-2');
console.log(out2);

for (let i = 1; i < 4; i++) {
	out2.innerHTML += i + "<br>";
	for (let k = 0; k < 3; k++) {
		out2.innerHTML += '*_';
	}
	out2.innerHTML += "<br>";
}


// Task 3
// С помощью вложенных циклов, нарисуйте строку:

// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// Решить задачу с помощью вложенных циклов. Внутренний цикл выводит *_, внешний цикл выводит перенос строки br.

let out3 = document.querySelector('.out-3');
console.log(out3);

for (let i = 0; i < 4; i++) {
	for (let k = 0; k < 3; k++) {
		out3.innerHTML += '*_';
	}
	out3.innerHTML += "<br>";
}


// Task 3
// Таблица умножения

let out4 = document.querySelector(".out-4");

for (let i = 1; i < 10; i++) {
	for (let k = 1; k < 10; k++) {
		out4.innerHTML += `${i}*${k}=${i * k}<br>`;
	}
	out4.innerHTML += '<hr>';
}

