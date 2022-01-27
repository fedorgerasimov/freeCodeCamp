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
