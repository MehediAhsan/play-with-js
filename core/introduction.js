/* 

JavaScript is a client-side and server-side scripting language inserted into HTML pages and is understood by web browsers. JavaScript is also an Object-based Programming language.

*/


// How to declare a valid variable

// 1. Letter(A-z)
// 2. Number {0-9}
// 3. UnderScore (_)
// 4. Doller ($)

// Don't use to write a valid variable

// 1. don't use keyword

// 2. don't use a number of the beginning of the variable name 

// 3. don't use space

// 4. it's case sensitive

// note :  CamelCase

var firstName = 74;

// data type for

// var test = false;

// console.log(typeof test);

// var number = "71.52";
// var number2 = 50;

// console.log(parseInt(number));

// console.log(parseFloat(number));

// if else statement start

// var color = "blue";

// if (color == "black") {
//   console.log("It's nice");
// } else if (color == "blue") {
//   console.log("It's beautiful");
// } else {
//   console.log("so so");
// }


// var num = 100;

// if (num >= 100) {
//   console.log("You can take it");
// } else {
//   console.log("you can't");
// }

// if (num > 100) {
//   console.log("positive");
// } else if (num < 0) {
//   console.log("negative");
// } else if (num == 100) {
//   console.log("equal");
// } else {
//   console.log("others");
// }

// var tamim = 80;

// if (tamim > 0) {
//   if (tamim == 80) {
//     console.log("yes nested");
//   } else {
//     console.log("its not correct");
//   }
// } else {
//   console.log("mark can not be negative number");
// }

// 0-32 = F grade
// 33-39 = D
// 40-49 = C
// 50-59 = B
// 60-69 = A-
// 70-79 =A
// 80-100 = A+

// var result = 4;

// if (result < 33 && result > 0) {
//   console.log(result, "Fail");
// } else if (result >= 33 && result < 40) {
//   console.log("D grade");
// } else if (result >= 40 && result < 50) {
//   console.log("C grade");
// } else {
// }

// switch
// switch, case,break,default,

// var name = "mehedi";

// switch (name) {
//   case "rahim":
//     console.log("its rahim");
//     break;
//   case "abdul":
//     console.log("it's abdul");
//     break;
//   case "mehedi":
//     console.log("it's Mehedi");
//     break;
//   default:
//     console.log("dont know");
//     break;
// }

// var numbers = [1, "rahim", 3, 4, 5, "mehedi", 7, 8, 9];

// numbers.push("Dhaka");
// numbers.pop();

// numbers.shift();

// numbers.unshift("Bangladesh")

// numbers.reverse();
// numbers.join("-");
// numbers.join("-");

// console.log(numbers)
// for (var i = 1; i < 5; i++) {
//     console.log(i);
//   }

var friends = ["rakib", "sohan", "siam", "mehedi"];

// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// var temp = friends[0];

// for (var i = 0; i < friends.length; i++) {
    
//   var element = friends[i];
//   if (element.length > temp.length) {
//     temp = element;
//   }
// }

// console.log(temp);


/*********************************************************/
/*********************************************************/


// Key Words

// reserved word

if (true) {
  console.log("yes");
}


// DAta Types preemtive


// 1. string

var name1 = "Mehedi";

console.log(typeof name1);

// number data types
var roll = 71;

console.log(typeof roll);

// boolean data types
var statement = true;
console.log(typeof statement);

// *parseFloat parseInt

var num1 = 70.78;
var num2 = 70;

var sum = num1 + num2;
console.log(parseInt(sum));
// console.log(parseFloat(sum));

// ## If else statement

if (4 > 5) {
  console.log("4 is bigger than 5");
} else {
  console.log("5 is bigger than 4");
}

// 2nd examaple with condition
var number = 50;
if (number % 2 == 0) {
  console.log("its even number");
} else if (number % 2 == 1) {
  console.log("its Oddd number");
} else {
  console.log("don't know");
}

// 3rd examaple

// nested condition

var number2 = 30;

if (number2 > 20) {
  if (typeof number2 == "number") {
    console.log("number 2 is a number");
  } else if (typeof number2 == "string") {
    console.log("number 2 is a string");
  } else {
    console.log("number 2 is a boleen");
  }
} else {
  console.log("number 2 is small");
}

// Grade countunting

var result = -39;
if (result > 0) {
  if (result < 33) {
    console.log("Fail");
  } else if (result >= 33 && result < 40) {
    console.log("Passed");
  } else if (result >= 40 && result < 50) {
    console.log("your grade is D");
  } else if (result >= 50 && result < 60) {
    console.log("your grade is C");
  } else if (result >= 60 && result < 70) {
    console.log("your grade is B");
  } else if (result >= 70 && result < 80) {
    console.log("your grade is A-");
  } else if (result >= 80 && result < 90) {
    console.log("your grade is A+ ");
  } else if (result > 90 && result <= 100) {
    console.log("your grade is  excillent ");
  } else {
    console.log("cant not found please try again yoru grade range is 0-100");
  }
} else {
  console.log("please try with positive number ");
}

// ** Switch statement  with condition

var num5 = 10;

switch (num5) {
  case 1:
    console.log("hello");
  case 5:
    console.log("hi");
}


//data types non-preemtive

// data structure
// Array

var box = ["Mehedi", 10, "bangladesh", "dhaka", 71];

// ** Each value of the array is called an element ie the above box array has 5 elements. Each element can be anything, a string or an integer or even an object.

// ** JavaScript gives the index number for the next values, starting with zero for the first value and so on. When accessing, first the name of the variable, then the index number inside the third bracket (square bracket []). For example if you want to access the 2nd value box[1] like this.

// ** To create an array, as in the first example, put the values in single or double quotation marks inside the third parenthesis and separate each value with a comma (,). The technical name for creating an array like this is "array literal".

// Besides, arrays can be created by using the new keyword Array() function (its name is actually constructor) like the above array can be created as below.


var box2 = new Array("HTML", "CSS", "JavaScript", "PHP");

// Array fucntion
let stuff = ["A", "B", "C", "D", "E", "F"]; // test array

// Useful array methods
stuff.pop(); // removes the last item in the array (returns what was removed)
//stuff = ['A', 'B', 'C', 'D', 'E']
//return: ['F']
stuff.shift(); // removes the first item in the array (returns what was removed)
//stuff = ['B', 'C', 'D', 'E', 'F']
//return: ['A']
stuff.push("G"); // adds an item to the end of the array (returns the new length of the array)
//stuff = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
//return: 7
stuff.unshift("Z"); // adds an item to the beginning of the array (returns the new length of the array)
//stuff = ['Z', 'A', 'B', 'C', 'D', 'E', 'F']
//return: 7
stuff.indexOf("C"); // returns the index number of the item in the array
//return: 2
stuff.splice(2); // gets rid of the index item and after it (returns what was removed)
//stuff = ['A', 'B']
//return: ['C', 'D', 'E', 'F']
stuff.splice(2, 2); // second argument determines how many items are removed in total (including index) (returns what was removed)
//stuff = ['A', 'B', 'E', 'F']
//return: ['C', 'D']
stuff.splice(2, 0, "Hello"); // inserts item "hello" into index number 2 and shifts other items ahead (removing 0 items) (returns what was removed)
//stuff = ['A', 'B', 'Hello', 'C', 'D', 'E', 'F']
//return: []
stuff.splice(2, 3, "Hello"); // removes 3 items (including index number 2 and after) and inserts "hello" into index number 2 (returns what was removed)
//stuff = ['A', 'B', 'Hello', 'F']
//return: ['C', 'D', 'E']
stuff.slice(2); // same as splice but doesn't modify the original array (returns what would be removed)
//stuff = ['A', 'B', 'C', 'D', 'E', 'F']
//return: ['C', 'D', 'E', 'F']
stuff.concat(["G", "H", "I"]); // returns the combination of array "stuff" with the array argument
//return: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
stuff.toString(); // returns the combination of elements of the array into a string
//return: "A,B,C,D,E,F"
stuff.join("-"); // works the same as toString() but the argument determines what is between each element in the string
//return: "A-B-C-D-E-F"
stuff.reverse(); // reverses an array's elements (returns same thing)
//stuff = ['F', 'E', 'D', 'C', 'B', 'A']

var numbers = [1, 2, 3, 4, 5, 6, 7];

// push
numbers.push(8);
console.log(numbers);

//**  */ pop

numbers.pop(8);
console.log(numbers);

//** */ shift

numbers.shift();
console.log(numbers);

// ** unshift
numbers.unshift(15);
console.log(numbers);

// console.log(numbers.toString())
// console.log(numbers.reverse())
// console.log(numbers.join("-"))
// console.log(numbers.slice(1,6))

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }


//Object


/* JavaScript object is a non-primitive data-type that allows you to store multiple collections of data. 
If you are familiar with other programming languages, JavaScript objects are a bit different. You do not need to create classes in order to create objects.
JavaScript objects are containers for named values called properties.
*/

//Declaration of an object

var person = {
    firstName:'Mehedi',
    lastName:'Ahsan',
    id:2501,
    location:'Faridpur'
};

//call an object

console.log(person);
console.log("Person id is:",person.id); //show specific value of the property
person.address='Bagerhat'; //add a property in the object
console.log("\n");
console.log(person);

//object keys and values show
console.log("\n");

console.log(Object.keys(person));
console.log(Object.values(person));

//another two types to find the value of property
console.log("\n");

var personName= person['firstName']; //kind of array
console.log(personName);

var propertyName = 'location'; //first find the name
var propertyValue = person[propertyName];
console.log(propertyName,propertyValue);

