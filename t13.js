// Task1
// СОздать массив

let a = ["Den", "Bareisch34ev", true, 1];
console.log(a);


// Task2
// СОздать массив  и вывести его в div

let b = [ "Den", "Bareischev23", true, 1];
let out1 = document.querySelector('.out-1');
out1.innerHTML = b;

// Task3
// Создать массив  и вывести его длину

let c = [ "Den", "Bareischev", true, 1];
console.log( c.length );

// Task4
// Создать массив  и вывести его 0ой, 3ий, 8ой элемент

let d = [ "Den", "Bar", true, 1, "Hi!", 34, 15, "Privet"];
console.log( c[0] );
console.log( c[3] );
console.log( c[8] );


// Task5
// Создать массив  и вывести его сумму 0ой, 3ий, 8ой элемент

let aMas = [ "Den", "Bareischev", true, 1, "Hi!", 34, 15, "Privet"];
let aSum = aMas[0] + " " + aMas[3] + aMas[8];
console.log(aSum);