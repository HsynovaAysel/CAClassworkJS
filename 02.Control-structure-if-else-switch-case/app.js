//task1
// let weather = 20;
// if (weather >= 22) {
//   console.log( `hava ${weather} derecedir, Nazik geyin`);
// } else if (weather >= 15) {
//   console.log(`hava ${weather} derecedir, Pencek geyin`);
// } else {
//   console.log(`hava ${weather} derecedir, Qalin geyin`);
// }

//task 2
// let letter="b";

// if( letter==="a" || letter === "i" || letter==="o" || letter==="u" || letter==="o" || letter==="e"  ){
//     console.log(`${letter}  saitdir `);
// }else{
//     console.log(`${letter} samitdir `);

// }

//task3

// let a = 25;
// let b = 52;
// let c = 88;
// if( a>b && a>c){
//     console.log(`${a} is grate `);
// }else if( b>c){
//     console.log(`${b} is grate `);
// }else{
//     console.log(`${c} is grate`);
// }

//task 4
// let number=40;
// if(a>=90){
//     console.log(`${number}-dan coxdursa Exam grade: A`);
// }else if(a>=80){
//     console.log(`${number}-dan coxdursa Exam grade: B`);
// }else if(a>=70){
//     console.log(`${number}-dan coxdursa Exam grade: C`);
// }else if(a>=60){
//     console.log(`${number}-dan coxdursa Exam grade: D`);
// }else if(a>=50){
//     console.log(`${number}-dan coxdursa Exam grade: F`);
// }else{
//     console.log(`kesildi`);
// }

//task5
// let firsteName="Aysel";
// console.log(firsteName.length); // 5
// if(firsteName.length<5){
//     console.log(`Salam ${firsteName}.Qisa adiniz var.`);
// }else if( firsteName.length<10){
//     console.log(`Salam ${firsteName}.Orta uzunluqda adiniz var.`);
// }else {
//     console.log(`Salam ${firsteName}.Adiniz cox uzundur.`);
// }

//task6
// let a=5;
// let b=7;
// let c=15;

// if(a+b > a+c && a+b> b+c){
//     console.log(`${a} + ${b} = ${ a+b} is Biggest`);
// }else if(a+c > b+c && a+c > a+b  ){
//     console.log(`${a} + ${c} = ${ a+c} is Biggest`);
// }else {
//     console.log(`${b} + ${c} = ${ b+c} is Biggest`);
// }

//task7
let a = 7;
let b = 4;
let c = 2;

let max;
let min;
if (a > b && a > c) {
  if (b > c) {
    max = a * 100 + b * 10 + c;
    min = c * 100 + b * 10 + a;
  } else {
    max = a * 100 + c * 10 + b;
    min = b * 100 + a * 10 + c;
  }
} else if (b > a && b > c) {
  if (a > c) {
    max = b * 100 + a * 10 + c;
    min = c * 100 + a * 10 + b;
  } else {
    max = b * 100 + c * 10 + a;
  }
} else {
  if (a > b) {
    max = c * 100 + a * 10 + b;
  } else {
    max = c * 100 + b * 10 + a;
  }
}

console.log("max", max);
console.log("min", min);
