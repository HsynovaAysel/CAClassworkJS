//----------------------------------------------------- TASK 1 -----------------------------------------------------
//findFirstNotRepeatedChar adlı bir function yaradın. Bu function göndərdiyiniz string-in ilk təkrarlanmayan
//hərfini qaytarsın. Nəticə =====>> "e"
let findFirstNotRepeatedChar = (el) => {
  let str = "";
  for (let i = 0; i < el.length; i++) {
    if (el.indexOf(el[i]) === el.lastIndexOf(el[i])) {
      str = el[i];
      break;
    }
  }
  return str;
};
console.log(findFirstNotRepeatedChar("abacddecz"));

// ----------------------------------------------------- TASK 2 -----------------------------------------------------

// charCount adlı function yaradın. Bu function 2 ədəd argument qəbul edir. 2-ci göndərdiyiniz hərf 1-cinin içərisində
// neçə dəfə təkrarlanıbsa onun sayısını göstərin.

// Nəticə: 3

let charCount = (a, b) => {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
      count++;
    }
  }
  return count;
};
console.log(charCount("w3rescource.com", "c"));
// ----------------------------------------------------- TASK 3 -----------------------------------------------------

// makeId adlı function yaradın. Bu function qəbul etdiyi rəqəm uzunluğunda random ID verməlidir.
// Məsələn =====>> 4SGqCfrz
let makeId = (a) => {
  let str = "";
  let charList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < a; i++) {
    str += charList.charAt(Math.floor(Math.random() * charList.length));
  }
  return str
};
console.log(makeId(8));

// ----------------------------------------------------- TASK 4 -----------------------------------------------------

// // console.log(uniqueChar("abccddee"));  ====>> abcde

// ----------------------------------------------------- TASK 5 -----------------------------------------------------

// console.log(Arrays_sum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8]));

// Nəticə: =====>> [4, 5, 8, 10, 12]

// ----------------------------------------------------- TASK 6 -----------------------------------------------------

var arr = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

let array = (a) => {
  for (let i = 0; i < a.length; i++) {}
  return `row ${i}`;
};
console.log(array(arr));
// Nəticə: =====>>
// row 0
//  1
//  2
//  1
//  24
// row 1
//  8
//  11
//  9
//  4
// row 2
//  7
//  0
//  7
//  27
// row 3
//  7
//  4
//  28
//  14
// row 4
//  3
//  10
//  26
//  7
