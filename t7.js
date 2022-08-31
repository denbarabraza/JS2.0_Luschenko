// Task 1
// Кнопка .b-1 запускает функцию t1. Функция должна выводить в .out-1 строку вида:  1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_


// let start = 0;
// let end = 10;
let out = " ";

function t1() {
	for (let i = 0; i < 15; i++) {
		out += i + "_";
		// console.log(out);
	}
}

document.querySelector("#out-1").innerHTML = out;
document.querySelector(".b-1").onclick = t1;


