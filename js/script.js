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
  source:  "Friedrich Nietzsche",
  citation: 'phrase',
  year: "19th century"
},

{
  quote: "Practice makes perfect.",
  source:  "Vince Lombardi",
  citation: "phrase",
  year: "20th century"
},

{
  quote: "The journey of a thousand miles begins with one step.",
  source:  "Lao Tsu",
  citation: "phrase",
  year: "5th century B.C."
},

{
  quote: "Life is like a box of chocolates. You never know wich one you are going to get.",
  source:  "Forest Gump",
  citation: "movie",
  year: "20th century"
},

{
  quote: "When life gives you lemons, make a lemonade.",
  source:  "Elbert Hubbard",
  citation: "phrase",
  year: "19th century"
}

];

/***
 * 1)`getRandomQuote` function
***/
/**
 * This function returns the one random quote from an array of objects.
 *
 * @param {array} arr - Takes in an array of famous qotes (array of objects in this case).
 * @return {object} - One random object from an array of objects.
 */

function getRandomQuote(arr) {
  let randomNumber = Math.floor(Math.random() * arr.length); 
  return arr[randomNumber];
}



//Testing getRandomQuote function:
// console.log( getRandomQuote(quotes) );
// console.log( typeof getRandomQuote(quotes) );




/***
 * `2) printQuote` function
***/
/**
 * Prints an html <p> tags into index.html file.
 */

function printQuote() {
  const randomQuote = getRandomQuote(quotes);
  // return randomQuote;
  let htmlQuote = `
  <p class='quote'> ${randomQuote.quote} </p>
  <p class='author'> ${randomQuote.source}`
  if (randomQuote.citation) {
    htmlQuote += `<span class="citation"> ${randomQuote.citation} </span>`;
  }
  if (randomQuote.year) {
    htmlQuote += `<span class="citation"> ${randomQuote.year} </span> </p>`;
  }
  document.getElementById('quote-box').innerHTML = htmlQuote;
}

//Testing printQuote():
console.log(printQuote() );



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);