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
