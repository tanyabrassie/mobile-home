var swatch = {
	id: 234,
	name: 'TanyaIsSexy',
	type: 'BEAN'
};


//since there is no action on this function, "this" refers to the window.

function Swatch (id, name, type) { //SWATCH MAKING MACHINE AKA SWATCH CONSTRUCTOR FUNCTION
	this.id = id;
	this.name = name;
	this.type = type;
}

function SuperSwatch () {
	Swatch.apply(this, arguments);
}

SuperSwatch.prototype = Swatch;

// using the new keyword
var mySwatch = new Swatch(1, 'TanyaIsSexy1', 'BEAN');


// // what happens behind the scenes of new keyword, roughly
// function newSwatch () {
// 	var obj = {};

// 	Swatch.apply(obj, arguments); //apply swatch to the context of empty object
// 	return obj;
// }

// var mySwatch2 = newSwatch(1, 'TanyaIsSexy1', 'BEAN');




//Making object properties Private
//When creating an object, sometimes you don't want all the data available publicly so you create
// a function to act as a middle man and pass on the value.
function createSwatchObject () {
	var color = "green" //declaring an object with the property of "color"

	var swatch = { // creating a middle man function 
		getColor: function () {
			return color;
		}
	};

	return swatch;








	// 1. create constructor function which will be the blueprint for your object. To save space you can assign functions to the prototype of this
	//so each new object you create doesn't have its own version of the functions 
	// 2. assign functions to the prototype
	// 3. create a new object, applying the class/blueprint to it and any additional information you want
	// 4. assign the prototype to the object and define the object's constructor


function Turtle (name) {
	this.name = name
	this.canThink = true;
};


Turtle.prototype.work = function () {
	if (this.canThink) {
		console.log("I am an eligible worker. In fact, I am a" + this.name + "hehe");
	}
};


var dustin = new Turtle("dustin");

dustin.work()







// 1. Create a constructor function for Turtles.


function Turtle (species, age, disposition) {
	this.species = species;
	this.age = age;
	this.disposition = disposition;
};


Turtle.prototype.canThink = function () {
	console.log("This turtle of the " + this.species + " variety can think.");
};


var newTurtle = new Turtle("desert turtle", 545, "grumpy");


//////////////


function Turtle (turtleObj) {
	this.species = turtleObj.species || "Desert Turtle";
	this.age = turtleObj.age;
	this.disposition = turtleObj.disposition;
	this.hasMind = turtleObj.hasMind;
};


Turtle.prototype.canThink = function () {
	if (this.hasMind) {
		console.log("This turtle of the " + this.species + " variety can think.");
	}	
};


var newTurtle = new Turtle({species: "desert turtle", age: 87, disposition: "shitty", hasMind: false});
//var newTurtle = new Turtle("desert turtle", 545, "grumpy", true);


function DesertTurtle (turtleObj) {
	Turtle.call(this, turtleObj);
	this.christianName = turtleObj.christianName;
	this.job = turtleObj.job;
	this.isLusty = turtleObj.isLusty;
}

DesertTurtle.prototype = Object.create(Turtle.prototype);

DesertTurtle.prototype.watchOut = function () {
	if (this.isLusty) {
		console.log("Oh no! This turtle, " + this.christianName + " could be a potential sex offender. Be cautious when extending job offers and make sure to always wear proper clothing when around " + this.christianName + "'s vicinity.");
	}
}


var newDesertTurtle = new DesertTurtle({
	age: 87, 
	disposition: "grumpy",
	hasMind: true,
	christianName: "Dustin Dunes",
	job: "InCahoots Office Manager",
	isLusty: true
});





function Perp (perpObj) {
	this.assaults = perpObj.assaults;
	this.assaultType = perpObj.assaultType;
	this.location = perpObj.location;
	this.incarcerated = perpObj.incarcerated;
	this.fbiWarning = perpObj.fbiWarning;
}



Perp.prototype.fbiAlert = function () {
	if (this.fbiWarning) {
		console.log("Warning. This perp is on the lose and has commited " + this.assaults +  " aggravated assaults. Please lock you doors and stay away from any and all fuzzy creatures.");
	}
}


function MuppetPerp (perpObj) {
	Perp.call(this, perpObj);
	this.muppetType = perpObj.muppetType;
	this.likes = perpObj.likes;
	this.views = perpObj.views; 
}

MuppetPerp.prototype = Object.create(Perp.prototype);


var newMuppetPerp = new MuppetPerp ({
	assaults: 43,
	assaultType: "aggravated molest",
	location: "Crown Heights",
	incarcerated: true,
	fbiWarning: true, 
	muppetType: "Fozzy Bear",
	likes: 23,
	views: 4532,	
});






















