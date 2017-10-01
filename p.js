//prototypal inheritance


var language = {
		name: "",
		traits: {},
		print: function() {
			console.log(this.name,this.traits);
		}
};

var javascript = Object.create(language);
javascript.name = "javascript";
javascript.traits.languagteType = "dynamic";
javascript.traits.environment = "interpreted";
javascript.traits.scoping = "function based";

var java = Object.create(language);
java.name = "java";
java.traits.languagteType = "static";
java.traits.environment = "compiled/interpreted";
java.traits.scoping = "block based";

javascript.print();
java.print();
console.log(javascript.getPrototype);
console.log("@jamesdubyou");
