
//greater than funcion in a declaration.
function greaterThan (a, b) {
	if(a > b) {
		return a;
	}
	    return b; 
};
console.log(greaterThan(5, 0));

// helloWorld function, 1 arg, lang code es, de, en, logs lang.

function translator (lang) {
	if(lang === "es") {
		console.log("Hola, Mundo!");
	}else if(lang === "de") {
		console.log("Bonjour!");
	}else {
		console.log("Hello World!")
	}

};
translator("es");
translator("de");
translator("en");

// Grade Assigner takes 1 arg, returnes grade A-f 
function gradeAssigner(score) {
	if(score >= 90) {
		console.log("You got a: A");
	}
	else if(score >= 80) {
		console.log("You got a: B")
	}
	else if(score >= 70) {
		console.log("You got a: C")
	}
	else if(score >= 65) {
		console.log("You got a: D")
	}
	else {
		console.log("Not Yet")
	};

};
gradeAssigner(90);
gradeAssigner(85);
gradeAssigner(75);
gradeAssigner(64);
gradeAssigner(45);

//function name plurizer add s to pair or more unless geese or sheep

function plurize(noun, num) {
	if(noun !== "sheep" && noun !== "geese" && num !== 1) {
		console.log(num + ": " + noun + "s.");
	}
	else {
		console.log(num + ": " + noun);
	}
};
plurize("cat", 1);
plurize("dog", 2);
plurize("sheep", 4);
plurize("geese", 1);
