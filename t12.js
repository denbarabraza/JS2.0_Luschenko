// Task1
// По нажатию на кнопку .b-1 функция присваивает блоку .out-1 ширину 200px, высоту 90px.


let out1 = document.querySelector(".out-1");


function f1() {
	out1.style.width = "200px";
	out1.style.height = "90px";	
}

document.querySelector(".b-1 ").onclick = f1

// Task2
// По  нажатию на кнопку .b-2 функция f2, которая присваивает блоку .out-2 класс .bg-orange.

let out2 = document.querySelector(".out-2");


function f2() {
	out2.style.backgroundColor = "orange";
}

document.querySelector(".b-2 ").onclick = f2


// Task3
// По нажатию кнопки .b-3 запускайте функцию f3, которая удаляет у блока .out-3 класс .bg-orange.

let out3 = document.querySelector(".out-3");


function f3() {
	out3.classList.remove("out-3");
}

document.querySelector(".b-3 ").onclick = f3
