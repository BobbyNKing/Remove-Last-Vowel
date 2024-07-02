/*
Write a function removeLastVowel(word) that takes in a string and returns the
string with its last vowel removed.
Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
//we need to index into the string, first of all 
//every time we hit a vowel, we replace the value of a variable with that vowel
//we will have the last vowel by the end of that one loop

//to test for vowels, we can solve this with a nested loop. We are indexing into 
//the argument, in the same way we can index into a variable containing any possible
//"hits" for a vowel

//first loop initiates the sequence through argument
//second loop takes word[i] and compares it to each sequence in VOWELS variable

//next, we can split the string with that value
//then, we can join it back together

function removeLastVowel(word) {
    let i = 0; //index for first loop
    let hit;
    let wordReturn = [];
    let VOWELS = 'aeiouAEIOU';

    while (i <= word.length) { //inclusive because we need to look at the last letter, too
        let iW = 0; //reset second loop index
        while (iW < VOWELS.length) { //indexes into VOWELS to compare for hits
            if (word[i] === VOWELS[iW]) { //if statement to index through vowels and search for hits in a word
                console.log(word[i])
                hit = word[i]; //this will keep replacing value until we get the last instance of a vowel in a word
                iW++; //run nested loop again to check all vowels
            } else {
                iW++; //run nested loop without replacing hit
            }
        }
        i++; //run entire loop again, while also checking next index of word argument
    }

    //with the above nested loop, we have located the last vowel in a string
    //now, lets split it 
    
    wordReturn = word.split(hit); //now we should have split up string
    
    return wordReturn.join(""); //wonder if leaving blank returns a regular string

}

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = removeLastVowel;
