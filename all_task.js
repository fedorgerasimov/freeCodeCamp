// Escaping Literal Quotes in Strings
const myStr1 = " I am a \"double quoted\" string inside \"double quotes\"."
console.log(myStr1);

//Quoting Strings with Single Quotes
const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';

//Escape Sequences in Strings
const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";

//Find the Length of a String
let lastNameLength = 0;
const lastName1 = "Lovelace";
lastNameLength = lastName1.length;

//Use Bracket Notation to Find the First Character in a String
let firstLetterOfLastName = "";
const lastName2 = "Lovelace";
firstLetterOfLastName = lastName2[0];

//Use Bracket Notation to Find the Last Character in a String or Nth-to-last
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

//Passing Values to Functions with Arguments
function functionWithArgs(a, b){
    console.log(a+b);
  }
  functionWithArgs(4,5);

  //Return a Value from a Function with Return
  function timesFive(num){
    return num*5;
  }
  timesFive(5);
 
  //Global Scope and Functions // https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-global-scope-and-functions/18193
const myGlobal = 10;
function fun1() {
   oopsGlobal = 5;  // Global scope without let           num1 = 18; // Global scope
}                                                       //function fun() {
function fun2() {                                       //  num2 = 20; // Global Scope
  var output = "";                                      //  if (true) {
  if (typeof myGlobal != "undefined") {                 //      num3 = 22; // Global Scope
    output += "myGlobal: " + myGlobal;                  //}
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();

// Global vs. Local Scope in Functions
const outerWear = "T-Shirt";
function myOutfit() {
  let outerWear = "sweater";
  return outerWear;
}
console.log(myOutfit());

// Understanding Undefined Value returned from a Function
let sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive(){
  sum = sum + 5;
}
console.log(addThree());
console.log(addFive());

//Assignment with a Returned Value
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
console.log(processed);

//Stand in Line
//Add the number to the end of the array, then remove the first element of the array.
//The nextInLine function should then return the element that was removed.
function nextInLine(arr, item) {
    arr.push(item);
    let remove = arr.shift(); // or return arr.shift()
    return remove;
  }
  const testArr = [1, 2, 3, 4, 5];
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  //Use Conditional Logic with If Statements
  function trueOrFalse(wasThatTrue) {
    if (wasThatTrue){
      return "Yes, that was true";
    }
    return "No, that was false";
}
console.log(trueOrFalse(true));

//Comparison with the Equality Operator
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
console.log(testEqual(12));

//Else Statements
function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else  {
    result = "5 or Smaller";
  }
  return result;
}
console.log(testElse(4));

//without Else If Statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } if (val < 5) {
    return "Smaller than 5";
  } 
  return "Between 5 and 10";
}
console.log(testElseIf(7));

//with Else If Statements
function testElself(val) {
  if (val > 10){
    return "Greater than 10";
  } else if (val <5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
console.log(testElself(20));

//Logical Order in If Else Statements
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val > 10) {
    return "Greater than or equal to 10";
  } else {
    return "Less than 10";
  }
}
console.log(orderMyLogic(11));

//Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes ===1) {
    return names[0];
  } else if (strokes <= par -2){
    return names[1];
  } else if (strokes === par -1){
    return names[2];
  } else if (strokes === par){
    return names[3];
  } else if (strokes === par + 1){
    return names[4];
  } else if (strokes === par + 2){
    return names[5];
  } else {
    return names[6];
  }
}
console.log(golfScore(5, 4));

//Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  let answer = "";
  switch(val) {
    case 1:
      answer ="alpha";
      break;
    case 2:
      answer ="beta";
      break;
    case 3:
      answer ="gamma";
      break;
    case 4:
      answer ="delta";
      break;
  }
  return answer;
}
console.log(caseInSwitch(3));

//Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  let answer = "";
  switch (val) {
    case "a":
      answer = 'apple';
      break;
    case "b":
      answer = 'bird';
      break;
    case "c":
      answer = 'cat';
      break;
    default:
      answer = 'stuff';
  }
  return answer;
}
console.log(switchOfStuff('b'));

//Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  let answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = 'Low';
      break;
    case 4:
    case 5:
    case 6:
      answer = 'Mid';
      break;
    case 7:
    case 8:
    case 9:
      answer = 'High';
      break;   
  }
  return answer;
}
console.log(sequentialSizes(5));

//Replacing If Else Chains with Switch
function chainToSwitch(val) {
  let answer = "";
  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }
  return answer;
}
console.log(chainToSwitch(7));

function chainToSwitch(val) {
  let answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case  42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    default:
      answer = "";
  }
  return answer;
}
console.log(chainToSwitch(100));

//Returning Boolean Values from Functions
function isLess(a, b) {
  return a < b;
}
console.log(isLess(10, 15));

//Return Early Pattern for Functions
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2,2));


//Accessing Object Properties with Dot Notation
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
const hatValue = testObj.hat;      
const shirtValue = testObj.shirt;

//Accessing Object Properties with Bracket Notation
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
const entreeValue = testObj['an entree']; 
const drinkValue = testObj['the drink']; 

//Accessing Object Properties with Variables
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
const playerNumber = 16;
const player = testObj[playerNumber]; 
console.log(player);

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};
const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);

//Updating Object Properties
// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = 'Happy Coder';
console.log(myDog);

// Add New Properties to a JavaScript Object
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "woof";
console.log(myDog);

//Delete Properties from a JavaScript Object
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog['tails']; // or  myDog.tails
console.log(myDog);

//Using Objects for Lookups
function phoneticLookup(val) {
  let result = "";
  let lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  };
  result = lookup[val];
  return result;
}
console.log(phoneticLookup("charlie"));

/*Testing Objects for Properties
Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp).
 If the property is found, return that property's value. If not, return "Not Found".*/
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
const myObj = {  // how can we use hasOwnProperty
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");

//Manipulating Complex Objects
const myMusic = [  // This is an array which contains two object inside. 
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  { "artist": "Bob",
    "title": "Guitar",
    "release_year": 1999,
      "formats": [
      "CD",
      "MP3",
      ]
  }
];

// Accessing Nested Objects. 
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

//Accessing Nested Arrays  >= pine
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
const secondTree = myPlants[1].list[1];
console.log(secondTree);

//Record Collection
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !=='') {
    records[id][prop] = value;
  }else if (prop === 'tracks' && records[id].hasOwnProperty('tracks')=== false){
    records[id][prop] = [value];
  }else if (prop === 'tracks' && value !==''){
    records[id][prop].push(value);
  }else if (value === ''){
    delete records[id][prop];
  }
  return records;
}
console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));

/*Iterate with JavaScript While Loops
Add the numbers 5 through 0 (inclusive)
 in descending order to myArray using a while loop.
 myArray should equal [5, 4, 3, 2, 1, 0].*/
const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i --;
}
console.log(myArray);

// ourArray should equal [ 0, 1, 2, 3, 4 ]
const ourArray = [];
let i = 0;
while (i < 5) {
  ourArray.push(i);
  i++;
}
console.log(ourArray);

/*Iterate with JavaScript For Loops
ourArray = [0, 1, 2, 3, 4]. */
const ourArray = [];
for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
console.log(ourArray);

/*Iterate Odd Numbers With a For Loop
We'll start at i = 0 and loop while i < 10. 
We'll increment i by 2 each loop with i += 2.
ourArray = [0, 2, 4, 6, 8]
*/
const ourArray = [];
for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
console.log(ourArray);

/*Push the odd numbers from 1 through 9 to myArray using a for loop.
myArray = [1, 3, 5, 7, 9] */
const myArray = [];
for (let i = 1; i < 10; i+=2){
  myArray.push(i);
}
console.log(myArray);

//Count Backwards With a For Loop even numbers
const ourArray = [];
for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
console.log(ourArray);

// odd numbers
const myArray =[];
for (let i = 9; i > 0; i-=2) {
  myArray.push(i);
}
console.log(myArray);

//Iterate Through an Array with a For Loop
const arr = [10, 9, 8, 7, 6];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
// Find the sum of all elements in array  => 20
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total);

/*Nesting For Loops
The product of all the numbers in the subarrays of the array.
*/

function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

/* Iterate with JavaScript Do...While Loops
Change the while loop in the code to a do...while loop so the loop will push only 
the number 10 to myArray, and i will be equal to 11 when your code has finished running.
*/
const myArray = [];
let i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 11);
console.log(myArray);


/* Replace Loops using Recursion
multiply the first n elements of an array 
to create the product of those elements.
умножьте первые n элементов массива, 
чтобы получить произведение этих элементов.
*/
function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}
console.log(multiply([2,3,4], 3));

//Recursion
function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n-1) * arr[n-1];  // arr[n-1] - last element in array
  }
}
console.log(multiply([3,4,5,6], 4));


/*Write a recursive function, sum(arr, n), 
that returns the sum of the first n elements of an array arr.
 */
//with For loop
function sum(arr, n) {
  let sum = 0;
  for (let i = 0; i < n; i++ ) {
    sum += arr[i];
  }
  return sum;
}
console.log(sum([1, 5, 6], 0));

//recursive function
function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n -1) + arr[n - 1];
  }
}
console.log(sum([2, 3, 4], 1)); //>=2

/*Profile Lookup
The function should check if name is an actual contact's firstName
 and the given property (prop) is a property of that contact.
If both are true, then return the "value" of that property.
If name does not correspond to any contacts then return the string No such contact.
If prop does not correspond to any valid properties of a contact found to match name
then return the string No such property.
*/
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("Akira", "likes"));



