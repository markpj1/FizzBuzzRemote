//whileloop.js


var carArray = ["Honda", "Toyota", "Ford", "Chevy", "BMW"];
var i = 0;
var names = '';

while(carArray[i]) {
	names += carArray[i] + ", ";
	i++;

}
console.log(names);

var count = 0;
while(count <= 20) {
	if(count % 2 === 0) {
		console.log(count);
	}	
	count++;
};