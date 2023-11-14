// -------------------------------------------- TASK 1 --------------------------------------------
const text = "Java is awesome. Java is fun.";

// text dəyişəndə Java sözünün əvəzinə Javascript yazdırın
// ====>> JavaScript is awesome. Javascript is fun.

console.log(text.replaceAll("Java", "JavaScript"));
// -------------------------------------------- TASK 2 --------------------------------------------

// mixUp adlı function yaradın. function 2 parametr qəbul edir. Ən sonda aşağıdakı kimi
// nəticə çıxardın.
function mixUp(a, b) {
  let result = b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2);
  return result;
}
console.log(mixUp("val", "pur")); //'pul var'
console.log(mixUp("donce", "gevlet")); //'gence dovlet'

// -------------------------------------------- TASK 3 --------------------------------------------

// verbing adlı function yaradın. Bu function bir parametr(feil) qəbul edir. Bu feil əgər 3 hərfdən
// kiçikdirsə sözün özün return edin. Əgər sonu "ing" ilə bitirsə sonuna "ly" əlavə edin. Digər
// hallarda sözün sonuna "ing" əlaavə edin.
function verbing(word) {
  let verbingWord;
  if (word.length <= 2) {
    verbingWord = word;
  } else if (word.length > 2 && !word.endsWith("ing")) {
    verbingWord = word + "ing";
  } else {
    verbingWord = word + "ly";
  }
  return verbingWord;
}

console.log(verbing("go")); // go
console.log(verbing("swim")); //swiming
console.log(verbing("swiming")); //swimingly

// -------------------------------------------- TASK 4 --------------------------------------------

// Sözün palindrom olub olmadığını yoxlayın.

function isPalindrome(string) {
  let result = string.split("").reverse().join("");
  return result === string ? "polidromdur" : "polidrom deyil";
}
console.log(isPalindrome("kelek"));
console.log(isPalindrome("hello"));

// -------------------------------------------- TASK 5 --------------------------------------------

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function splitIntoChunk(arr, len) {
    
  return [[...arr.slice(0,len)],[...arr.slice(len, len + len)]]
}

console.log(splitIntoChunk(array, 4)); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]

// -------------------------------------------- TASK 6 --------------------------------------------
// function longestWord(a) {
    
   
//   }
  

//  console.log(longestWord("Hello word hi programmers"));

// Ən uzun sözü tapın.  ======>> programmers

// -------------------------------------------- TASK 7 --------------------------------------------
// function getFileExtension(filename){
//  }
// getFileExtension adlı function yaradın. Verilmiş fayl adının uzantısını göstərən kod yazın.

// console.log(getFileExtension('module.js')) //js
//  console.log(getFileExtension('module.txt')) //txt
