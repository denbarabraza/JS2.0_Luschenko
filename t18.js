// Task1
// Создать массив и применить метод 'map'.

let arA1 = [1, 2, 3, 4, 5, 13, 15, 16, 31, 16, 141, 27];

let arB1 = arA1.map(function (item, index) {
	return item * 10;
})

console.log(arB1);

// Task2
// Создать массив и применить метод 'filter'.

let arA2 = [1, 2, 3, 4, 5, 13, 15, 16, 31, 16, 141, 27, 222];

let arB2 = arA2.filter(item => item > 100)

console.log(arB2);


// Task3
// Создать строку и применить метод 'join', 'split', 'reverse'.

let str3 = 'hi, hello, ciao, привет'

let arA3 = str3.split(',');
console.log(arA3);
arA3.push(' здарова');
arA3.shift();

let str31 = arA3.join();
console.log(str31);

let str32 = arA3.reverse();
console.log(str32);


// Task4
// Создать строку и применить метод 'forEach'.

let ar4 = [23, 24, 245, 5565];



ar4.forEach(function(item, index){
	console.log(index);
	console.log(item);
	console.log('--');
})

