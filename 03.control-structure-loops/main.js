// task1
// for (let i = 1; i <100; i++) {
//   if (i % 2 === 0) console.log(i);
// }
// task2
// let fullName="Aysel"
// console.log(fullName.length);
// for (i = 0; i < fullName.length; i++) {
//   console.log(fullName[i]);
// }
// task3
//  for(let i= 10; i < 100; i++){
//   if(i%10===7)console.log(i);
//  }
// task4
// for( let i=11; i<100; i=i+11){
//   console.log(i);
// }
// for (let i = 0; i < 100; i++) {
//   if (i % 11 === 0) console.log(i);
// }

// task5
// let number=56;
// for(let i=1; i<=number; i++){
// if(number%i==0)console.log(i);
// }
//task6
// let number = 10;
// let factorial = 1;
// for (let i = 1; i <= number; i++) {
//   factorial *= i;
// }
// console.log(factorial);
// task7
// let sum = 0;
// for (i = 1; i < 10; i++) {
//   if (i % 2 === 0) {
//     sum += i
//   };
// }
// console.log(sum);

// task8
// let sum = 0;
// for (let i = 10; i < 50; i++) {
//   if (i % 3 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);
//  hometask1

let number = 345;
let number1 = number % 10;
let number2 = ((number - number1) % 100) / 10;
let number3 = (number - number1 - number2) / 100;

let sum=number1+number2+number3;
console.log(sum);



