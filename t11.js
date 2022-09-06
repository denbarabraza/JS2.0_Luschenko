// Task1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в .out-1 строку вида 1_2_3_4_5_6_7_8_9_ ... 49_50_


let out1 = document.querySelector(".out-1");
let i = 1;

function t1() {
	while (i < 51) {
		out1.innerHTML += i + "_";
		i++;
	}

	// for (let i = 1; i < 51; i++) {
	// 	out1.innerHTML += i + "_"
	// }
}

document.querySelector(".b-1 ").onclick = t1


// Task2
//Кнопка b-2 запускает функцию t2. Функция должна выводить в .out-2 строку вида (вы выводите все числа с шагом 2 без пропуска. Три точки не выводите! Пропуска чисел с 6 по 44 нет. ):
// 2_4_6_ ... 44_46_
// от 2 до 46 c шагом 2. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла while.


let out2 = document.querySelector(".out-2");
let i_2 = 2;

function t2() {
	while (i_2 < 48) {
		out2.innerHTML += i_2 + "_";
		i_2 = i_2 + 2;
	}

	// for (let i_2 = 2; i_2 < 48; i_2=i_2+2) {
	// 	out1.innerHTML += i_2 + "_"
	// }
}

document.querySelector(".b-2 ").onclick = t2

// Task3
//Кнопка .b-3 запускает функцию t3. Функция должна выводить в .out-3 строку вида:
// 25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_
// от 25 до 7 c шагом 1. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла while.


let out3 = document.querySelector(".out-3");
let i3 = 25;

function t3() {
	while (i3 > 6) {
		out3.innerHTML += i3 + "_";
		i3--;
	}

	// for (let i3 = 1; i3 < 51; i3++) {
	// 	out1.innerHTML += i + "_"
	// }
}

document.querySelector(".b-3 ").onclick = t3

// Task4
//Сумма всех чисел от 0 до 10

let out4 = document.querySelector(".out-4");
let p = 0;
let sum = 0;
let end = 3;

function t4() {
	while (p < (end + 1)) {
		sum = sum + p;
		p++;
		console.log(p);
	}
	out4.innerHTML = sum;

}

document.querySelector(".b-4 ").onclick = t4