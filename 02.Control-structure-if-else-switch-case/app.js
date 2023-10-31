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
// let a = 0;
// let b = 1;
// let c = 9;

// let max;
// let min;
// if (a > b && a > c) {
//   if (b > c) {
//     max = a * 100 + b * 10 + c;
//     min = c * 100 + b * 10 + a;
//   } else {
//     max = a * 100 + c * 10 + b;
//     min = b * 100 + a * 10 + c;
//   }
// } else if (b > a && b > c) {
//   if (a > c) {
//     max = b * 100 + a * 10 + c;
//     min = c * 100 + a * 10 + b;
//   } else {
//     max = b * 100 + c * 10 + a;
//     min = a * 100 +  c * 10 + b;
//   }
// } else {
//   if (a > b) {
//     max = c * 100 + a * 10 + b;
//     min = b * 100 +  a * 10 + c;
//   } else {
//     max = c * 100 + b * 10 + a;
//     min = a * 100 +  b * 10 + c;
//   }
// }

// console.log("max", max);
// console.log("min", min);

//question1
// let katet1=3;
// let katet2=3;
// let hipotenuz=8;
// let squareRoot=Math.sqrt(katet1**2+katet2**2);
// if(squareRoot===hipotenuz){
//   console.log(`hipotenuz: ${hipotenuz}. Duzbucaqli ucbucaqdir.`);
// }else{
//   console.log(`hipotenuz: ${hipotenuz}. Duzbucaqli ucbucaq deyil.`);
// }

//question2
//  let number=625;
//  let number1 = number % 10;
//  let number2 =(number-number1) % 100;
//  let number3=(number-number1-number2) ;
//  console.log(`${number3/100},${number2/10},${number1}`)


//question3
// let month="January";
// switch (month) {
//     case "January":
//     case "january":
//        console.log(`${month} has 31 days`);
//         break;
//     case "February":
//     case "february":
//         console.log(`${month} has 28 days`);
//         break;
//     case "March":
//     case "march":
//         console.log(`${month} has 31 days`);
//         break;
//     case "April":
//     case "april":
//         console.log(`${month} has 30 days`);
//         break;
//     case "May":
//     case "may":
//         console.log(`${month} has 31 days`);
//         break;
//     case "June":
//     case "june":
//         console.log(`${month} has 30 days`);
//         break;
//     case "July":
//     case "july":
//         console.log(`${month} has 31 days`);
//         break;
//     case "August":
//     case "august":
//         console.log(`${month} has 31 days`);
//         break;
//     case "September":
//     case "september":
//         console.log(`${month} has 30 days`);
//         break;
//     case "October":
//     case "october":
//         console.log(`${month} has 31 days`);
//         break;
//     case "November":
//     case "november":
//         console.log(`${month} has 30 days`);
//         break;
//     case "December":
//     case "december":
//         console.log(`${month} has 31 days`);
//         break;

//     default:
//         console.log(`there is not month`);
//         break;
// }

//question 4
// let number=8
// if(number%2===1){
//     console.log(`${number} tek reqemdir.`);
// }else{
//     console.log(`${number} cut reqemdir.`);
// }

//question 5
// let a=5;
// let b=5;
// let c=5;
// if(a===b && a===c && b===c ){
// console.log(`Beraber terefli ucbucaqdir.`);
// }else{
//     console.log(`Beraber terefli ucbucaq deyil.`);
// }

//question 6
// let a = 3;
// let b = 3;
// let c = 2;
// if (a === b && c !== b && c !== a) {
//   console.log(`Beraber yanli ucbucaqdir.`);
// } else {
//   console.log(`Beraber yanli ucbucaq deyil.`);
// }

//question 7
// let a = 3;
// let b = 3;
// let c = 0;
// if(a>0 && b>0 && c>0){
//     console.log(`Ucbucagin terefleridir.` );
// }else{
//     console.log(`Ucbucagin terefleri deyil.`);
// }

//question 8
//  let a = 3;
//  let b = 5;
//  [a,b]=[b,a]
//  console.log(`a:${a},b:${b}`);
 