
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