// Task1
// Добавьте на блок .div-1 событие клик и по клику запуск функции. Вывод осуществляется в out-1.

let out = document.querySelector('.out-1')

document.querySelector('.div-1').onclick = () => {
	out.innerHTML = 'Получилось...'
}

// Task2
// Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2.

let out2 = document.querySelector('.out-2');

function t2(event) {
	if(event.altKey == true) {
	out2.innerHTML = 'Нажата...'
	}
	else{
		out2.innerHTML = 'Не нажата...'
	}
}

document.querySelector('.div-2').onclick = t2;


// Task3
// Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3.

let out3 = document.querySelector('.out-3');
let w = 120;

document.querySelector('.div-3').onclick = () =>{
	document.querySelector('.div-3').style.width = w + 'px';
	w += 5 ;
	out3.innerHTML = `Ширина равна ${w}`;
};




