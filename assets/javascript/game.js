//create an array of words to generate

var wordlist = [
    "deadline",
    "miracle",
    "worker",
    "coding"
];
//create a variable for the word to be generated using a random word from the wordlist
var word = wordlist[Math.floor(math.random() * wordlist.length)];

//create a variable for the person's guess
var guess = onkeyup;

//create an empty array for the current word
var answerarray = [];

//create a for loop that replaces the current word with a place holder
for (var i=0; i < word.length; i++) function() {
    answerarray[i] = "_";
};

//create a variable for the word 
var remainingLetters = word.length;

//
$("#characters").append(" " + guess)