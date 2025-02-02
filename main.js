// Task-1:
// Count how many times a string has the letter a

const country = "amar sonar bangla ami tmy valobashi"
let count = 0;
for(let i of country){
      if(i === "a"){
            count++
      }
}
// console.log(count);




// Task-2:
// Count how many times a string has the letter a or A

let str = "amAro POAne ja";
let n = 0;

for(let i of str){
      if(i === "a" || i === "A"){
            console.log(i)
            n++
      }
}
console.log(n)


// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u
const strs = "example";

const vowels = ["a", "e", "i", "o", "u"];
let containsAllVowels = true;

for (let vowel of vowels) {
    if (!strs.toLowerCase().includes(vowel)) {
        containsAllVowels = false;
        break;
    }
}

if (containsAllVowels) {
    console.log("The string contains all vowels.");
} else {
    console.log("The string does not contain all vowels.");
}



// Task-5:
// Capitalize Every first Letter of each word in a String
let countrys = "bang la desh";
let result = countrys.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
console.log(result);