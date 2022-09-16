// // Task1
// // Создайте set s1. Добавьте в него три элемента 'h', 'b', 'o', 'h'. Добавление делайте через add. Выведите в консоль получившийся набор (set) s1.

// let s1 = new Set();
// s1.add('h');
// s1.add('b');
// s1.add('o');
// s1.add('h');

// console.log(s1);


// // Task2
// // При нажатии b-2 выполняете функцию f2. Функция должна добавить в набор s2 элементы, которые пользователь вводит в i-2. Функция должна выводить в консоль s2 после каждого добавления элемента.

// let s2 = new Set();

// let input = document.querySelector('.i-2');

// document.querySelector('.b-2').onclick = ()=>{
// 	s2.add(input.value);
// 	console.log(s2);
// }


// // Task3
// // При нажатии b-3 выполняете функцию f3. Функция должна удалить из набора s3 строку, которую пользователь вводит в i-3. Функция должна выводить в консоль s3 после каждого удаления элемента.

// let s3 = new Set();
// s3.add('h');
// s3.add('b');
// s3.add('o');
// s3.add('h');

// let input3 = document.querySelector('.i-3');

// document.querySelector('.b-3').onclick = ()=>{
// 	s3.delete(input3.value);
// 	console.log(s3);
// }

// Task 3
// Перебор массивов for..in, for..of

let tArr = {
	"a": 1,
	"b": 2,
	"c": 3,
	100: 4,
}

let tArr2 = [
	1, 2, 4, 6
]

for (let item in tArr){
console.log(item)
}