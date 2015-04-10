////for/loop.js
for(var i = 0; i < 20; i++) {
	if(i % 2 ===0) {
		console.log(i + " Is Even");
	}
	else {
	    console.log(i + " Is Odd");	
	}
};

// Nested loop: kinda need help with inner loops, not really sure what they do.

var multiplier = 9;	      
for (var multiplier = 0; multiplier <= 10; multiplier++) {
 for (var i = 0; i <= 10; i++) {
   var result = multiplier * i;
   console.log(multiplier + ' * ' + i + ' = ' + result);
 }
}

//// for loop that iterates through assignGrade function, i is the arg.
function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'Not yet';
    } else {
        return 'Needs more work';
    }
}
for(var i = 100 ; i >= 60; i--) {
	console.log("For score: " + i + " You received an: " + assignGrade(i));

}