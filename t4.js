// Task 1
// При нажатии (click) на .b-1 запускайте f1, которая выводите в .out-1 число 1.

let num1 = 1;


 function f1 () {
	let out = document.querySelector('.out-1');
	out.innerHTML = num1;
	console.log('Hi!')
}

document.querySelector('.b-1').onclick = f1;

// Task 2
// При нажатии (click) на .i-2 запускайте f2, которая выводите в .out-2 число 2. Т.е. как видите, мы можем повесить клик на любой элемент.

// p.s  повесил клик на div

let num20 = 111;
let num21 = 222;

//клик на input
 function f2 () {
	let out1 = document.querySelector('.out-2');
	out1.innerHTML = num20;
	console.log('Hi!')
}

//клик на div
function f3 () {
	let out1 = document.querySelector('.out-2');
	out1.innerHTML = num21;
	console.log('Hi!')
}

document.querySelector('.i-2').onclick = f2;
document.querySelector('.p-3').onclick = f3;
