// Task1
// СОздать массив

let a = ["Den", "Bareisch34ev", true, 1];
console.log(a);


// Task2
// СОздать массив  и вывести его в div

let b = ["Den", "Bareischev23", true, 1];
let out1 = document.querySelector('.out-1');
out1.innerHTML = b;

// Task3
// Создать массив  и вывести его длину

let c = ["Den", "Bareischev", true, 1];
console.log(c.length);

// Task4
// Создать массив  и вывести его 0ой, 3ий, 8ой элемент

let d = ["Den", "Bar", true, 1, "Hi!", 34, 15, "Privet"];
console.log(c[0]);
console.log(c[3]);
console.log(c[8]);


// Task5
// Создать массив  и вывести его сумму 0ой, 3ий, 8ой элемент

let aMas = ["Den", "Bareischev", true, 1, "Hi!", 34, 15, "Privet"];
let aSum = aMas[0] + " " + aMas[3] + aMas[8];
console.log(aSum);

// Task6
// Создать массив.Добавить в него значения и ввести в элемент div

let arr6 = ['one', 1, 2, 'two'];
console.log(arr6);
arr6.push('hi', 'foo', 'bar');

let out6 = document.querySelector('.out-6');
out6.innerHTML = '__' + arr6;

// Task7
// Создать массив.Добавить в него значения 3ий элемент раный 3.14, 4-17, 6-5. И ввести в элемент div и консоль+ длина.

let arr7 = [];
arr7[3] = 3.14;
arr7[4] = 17;
arr7[5] = 5;

let out7 = " ";
for (let i = 0; i < arr7.length; i++) {
	out7 += arr7[i] + '_ _'
}
document.querySelector('.out-7').innerHTML = out7 + "<br>" + "Длина: " + arr7.length;

console.log(arr7);
console.log(arr7[arr7.length - 1]);

// Task8
//Есть массив d8, кнопка b-8, input i-8. Напишите функцию f8, которая при нажатии читает i-8 и добавляем его в массив. После чего выводит массив в .out-8.

let input = document.querySelector('.i-8');

let d8 = [33, 'best', 66, 'best'];
let out8='';

document.querySelector('.b-8').onclick = function f1() {
	d8.push(input.value);
	for (let i = 0; i < d8.length; i++) {
		out8 +=d8[i] + '_ _'
	}
	document.querySelector('.out-8').innerHTML = out8;
	console.log(d8);
}

