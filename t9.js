// Task 1
// Таблица умножения на 6

let out = document.querySelector(".out-4");

for (let i = 1; i < 10; i++) {
	for (let k = 6; k < 7; k++) {
		out.innerHTML += `${k} * ${i} = ${k * i}<br>`;
	}
	// out.innerHTML += "<hr>";
}
