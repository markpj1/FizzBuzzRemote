

var total = 0, count = 1;

while (count <= 10) {
    total += count
	count ++;
}
console.log(total);

var myArray = [1,2,3,4,5,6,7,8,9,10];

function countUp(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
	    count += array[i];
	};
	return count;
    
}
console.log(countUp(myArray)); 
var flat = [];
for(var i = 1; i <= 10; i++) {
	flat.push(i);
	
};
console.log(flat);