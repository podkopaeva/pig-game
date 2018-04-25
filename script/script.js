// Lecture variables
/*
var name = 'Juls';
console.log(name);

var surName = 'Podkopaeva';
console.log(name + ' ' + surName);

var age = 30;

console.log('Hello my name is ' + name + ' ' + surName + 'and I have a ' + age + ' ' + 'years old');

var fullAge = true;
console.log(fullAge);
*/

//Lecture variables 2
/*
var name = 'Julia';
var age = 30;

console.log(name + ' ' + age);

var job, isMarried;
console.log(job);

job = 'Developer';
isMarried = true;

console.log(job);
console.log(isMarried);

var lastName = prompt('What is the best name?');
console.log(lastName);

*/

// Lecture: operators
/*
var now = 2018;
var birthYear = now - 30;

birthYear = now - 30 * 2;
console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = (3 + 5) * 4 - 6;
*/

// Lecture: if/else statements
/*
var name = 'Juls';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes') {
	console.log(name + ' is married!');
} else {
	console.log(name + ' will hopefully marry soon :)');

}

isMarried = true;
 /*
if (isMarried) {
	console.log('Yes!');
} else {
	console.log('No');
}
 */

 /*
if (isMarried) {
	console.log('Yes!');
}

if (23 === '23') {
	console.log('Someting print');
}
*/

//Lecture: boolean logic and switch

/*
var age = 35;

if (age < 20) {
	console.log('John is a teenager');
} else if (age  > 20 && age < 30) {
	console.log('John is a young man');
} else {
	console.log('John is a man');
}

var job = 'teacher';
job = prompt('What does john do?');

switch(job) {
	case 'teacher':
		console.log('John is a teacher');
		break;

	case 'developer':
		console.log('John is a developer');
		break;

	case 'driver':
		 console.log('John is a driver');
		 break;

	default:
		console.log('john does something');
}

*/

//Coding challenge
/*
var ageJohn = 19;
var ageMila = 20;
var heightJohn = 177;
var heightMila = 178;

var summJohn = ageJohn + 5 * heightJohn;
var summMila = ageMila + 5 * heightMila;
//console.log(summJohn + ' sm ');
//console.log(summMila + ' sm ');

if (summJohn > summMila) {
	console.log('The winner is John');
} else if ( summMila > summJohn) {
	console.log('The winner is Mila');
} else if (summJohn === summMila ){
	console.log('draw');
}
*/

//Lecture: Functionns
/*
function calculateAge(yearOfBirth) {
	var age = 2018 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1987);
var ageMike = calculateAge(1999);
var ageMila = calculateAge(1967);
// console.log(ageJohn);
// console.log(ageMila);
// console.log(ageMike);

function yearsUntilRetirement(name, yearOfBirth) {
	var age = calculateAge(yearOfBirth);
	var retirement = 65 - age;

	if (retirement >= 0) {
	console.log(retirement);
	} else {
		console.log('Person has already retired');
	}
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1999);
yearsUntilRetirement('Mila', 1948);
*/

//Lecture: Statements and expressions
/*
// statements
function fun(par) {
	// lines of code
}

// expressions
var someFun = function(par) {
	// lines of code 
}

// expressions 
3 + 4;
var x = 3;

// statements
if (x === 5) {
	// do someting
}
*/

// Lecture: Arrays
/*
var names = ['Mike', 'Mila', 'John'];
var years = new Array(1990, 1987, 1967);
console.log(names[1]);
names[1] = 'Julia';
console.log(names[1]);

var john = ['John', 'Smith', 1990, 'teacher', false];


john.push('orange'); // добавляє елемент в кінець масиву
john.unshift('Mister'); // добавляє елемент початок масиву
john.pop(); // remove from the and of array
john.shift(); //remove from the begining array
console.log(john);

//alert(john.indexOf('Smith'));

if (john.indexOf('designer') === -1) {
	console.log('John is not a teacher.');
}

*/

// Lecture: Objects
/*
var obj = {
	name: 'John',
	surname: 'Smith',
	age: 34,
	job: 'Teacher',
	isMarried: false
}

console.log(obj.surname);
console.log(obj['job']);

var zxc = 'job';
console.log(obj[zxc]);

obj.surname = 'Miller';
obj.job = 'Developer';
console.log(obj.surname);
console.log(obj.job);

// second way to work with objects

var jane = new Object();
jane.name = 'Jane';
jane.surname = 'Koller';
jane.age = 23;
jane.job = 'Student';
jane.isMarried = true;

console.log(jane);
*/

//Lecture: Objects and methods
// v1.0
/*
var john = {
	name: 'John',
	surname: 'Smith',
	yearOfBirth: 1990,
	job: 'Teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		return 2016 - this.yearOfBirth;
	}
};

//console.log(john.family[0]);
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/

// v2.0

/*
var john = {
	name: 'John',
	surname: 'Smith',
	yearOfBirth: 1990,
	job: 'Teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		this.age = 2018 - this.yearOfBirth;
	}
};

john.calculateAge();
console.log(john);
*/

// Lecture: Loop

// for (var i = 0; i <= 0; i ++ ) {
// 	console.log(i);
// }

// var names = ['Mike', 'Jil', 'Julia'];

// for (var i = 0; i < names.length; i ++) {
// 	console.log(names[i]);
// }

// for (var i = 3; i < names.length; i ++) {
// 	console.log(names[i]);
// }

 // for (var i = names.length - 1; i >= 0 ;i --) {
 // 	console.log(names[i]);
 // }

// for (var i = 2; i >= 0; i --) {
// 	console.log(names[i]);
// }

// var i = 0;
// while(i < names.length) {
// 	console.log(names[i]);
// 	i ++;
// }

// for (var i = 0; i <= 5; i ++) {
// 	console.log(i);

// 	if (i === 3) {
// 		break;
// 	}
// }

// Coding challenge 2

// var years = [1967, 1987, 2014];
// var emptyYears = [];
// var currentYear = 2018;

// for (var i = 0; i < years.length; i ++) {
// 	emptyYears.push(2018 - years[i]);
// 	console.log(emptyYears[i]);
// 	printFullAge(1967, 1987, 2014);
// }

// function printFullAge(arr) {
// 	if (emptyYears[i] >= 18) {
// 		console.log(true);
// 	 } else {
// 		console.log( false);
// 	}
// }

// Lecture: hoisting

// functions
// calculateAge(1999);

// function calculateAge(year) {
// 	console.log(2018 - year);
// }


//fun(1990);

// var fun = function(year) {
// 	console.log(65 - (2016 - year));
// }


//variables 
//console.log(age);
// var age = 33;

// function foo() {
// 	var age = 65;
// 	console.log(age);
// }

// foo();
// console.log(age);

// Lecture: Scope


// var a = 'Hello';
// first();

// function first() {
// 	var b = 'Hi';
// 	second();

// 	function second() {
// 		var c = 'hey!';
// 		//console.log( a + b + c);
// 		third();
// 	}
// }

// function third() {
// 	var d = 'heya';
// 	console.log(c);
// }


//Lecture: The this keyword

//console.log(this);

// calculateAge(1985);

// function calculateAge(year) {
// 	console.log(2016 - year);
// 	console.log(this);
// }

/*
var john = {
	name: 'John',
	age: 33,
	job: 'developer',
	calculateAge: function() {
		console.log(this);
		console.log(this.age);
	}
}

john.calculateAge();


var mike = {
	name: 'Mike',
	age: 23,
	job: 'teacher'
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();

*/


// Section: DOM manipulation

// Lecture: DOM and DOM manipulation



// Objects and prototypes



// var john = {
// 	name: 'John',
// 	yearOfBirth: 1987,
// 	job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;	
// }

// Person.prototype.calculateAge = function() {
// 	console.log(2016 - this.yearOfBirth);
// }



// var john = new Person('John', 1987, 'Teacher'); 
// var jane = new Person('Jane', 1948, 'retired');
// var mark = new Person('Mark', 1997, 'designer');



// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();



// testing prototype

var jane = {
	name: 'Jane',
	lastName: 'Smith',
	age: 33,
	job: 'Developer'
}

var Person = function(name, lastName, age, job) {
	this.name = name;
	this.lastName = lastName;
	this.age = age;
	this.job = job;
};


Person.prototype.printName = function() {
	console.log(this.name + ' ' + this.lastName + ' ' + this.age + ' ' + this.job);
}

Person.prototype.city = 'Kiev';

var jane = new Person('Jahn', 'Koroh', 34, 'Teacher');
var mike = new Person('Mike', 'Koroh', 37, 'Driver');



jane.printName();
mike.printName();

console.log(jane.city);
console.log(mike.city);


