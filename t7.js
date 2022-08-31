// Task 1
// Кнопка .b-1 запускает функцию t1. Функция должна выводить в .out-1 строку вида:  1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_


let start = 1;
let end = 17;
let out = ' ';

function t1() {
	for (let i = start; i < end; i++) {
		out += i + '_';
		// console.log(out);
	}
	document.querySelector('.out-1').innerHTML = out;
}

document.querySelector('.b-1').onclick = t1;


// Task 2
// Кнопка .b-2 запускает функцию t2. Функция должна выводить в .out-2 строку вида: 12_14_16_18_20_22_24_26_28_30_32_34_36_38_


let start2 = 12;
let end2 = 39;
let out2 = ' ';

function t2() {
	for (let i = start2; i < end2; i = i + 2) {
		out2 += i + '_';
		console.log(out2);
	}
	document.querySelector('.out-2').innerHTML = out2;
}

document.querySelector('.b-2').onclick = t2;

// Task 3
// Кнопка .b-3 запускает функцию t3. Функция должна выводить в .out-3 строку вида: 25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_


let start3 = 25;
let end3 = 6;
let out3 = ' ';

function t3() {
	for (let i = start3; i > end3; i--) {
		out3 += i + '_';
		console.log(out3);
	}
	document.querySelector('.out-3').innerHTML = out3;
}

document.querySelector('.b-3').onclick = t3;
