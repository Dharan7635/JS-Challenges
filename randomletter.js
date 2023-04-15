//first challenge
//to pick the random letter everytime in a given name
let word = "dharanitharan";
const letterCount = word.length;
const randomnumber = Math.floor(Math.random()*letterCount);
console.log(randomnumber)
console.log(word.charAt(randomnumber));

