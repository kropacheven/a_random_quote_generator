/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/


const quotes = [

{
  quote: "What does not kill you make you stronger.",
  author:  "Friedrich Nietzsche",
  citation: 'phrase',
  year: "19th century"
},

{
  quote: "Practice makes perfect.",
  author:  "Vince Lombardi",
  citation: "phrase",
  year: "20th century"
},

{
  quote: "The journey of a thousand miles begins with one step.",
  author:  "Lao Tsu",
  citation: "phrase",
  year: "5th century B.C."
},

{
  quote: "Life is like a box of chocolates. You never know wich one you are going to get.",
  author:  "Forest Gump",
  citation: "movie",
  year: "20th century"
},

{
  quote: "When life gives you lemons, make a lemonade.",
  author:  "Elbert Hubbard",
  citation: "phrase",
  year: "19th century"
}

];

/***
 * `getRandomQuote` function
***/
/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

function getRandomQuote(arr) {
  let randomNumber = Math.floor(Math.random() * arr.length) + 1; 
  return randomNumber;
}

//Testing
console.log( getRandomQuote(quotes) );








/***
 * `printQuote` function
***/
/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);