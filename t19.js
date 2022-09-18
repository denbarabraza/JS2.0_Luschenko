// Task1

let a = [1, 2, 'hi', 'Den', '5', 56];

console.log(a)

let b = a.filter( function(item,index){
	return typeof item === "string"
})

console.log(b)