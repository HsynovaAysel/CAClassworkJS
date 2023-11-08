//task1
// function printFullname(firstName = "lorem", lastName = "ipsum") {
//   let fullname = `${firstName} ${lastName}`;
//   return `I am ${fullname}`;
// }
// console.log(printFullname("Aysel", "Huseynova"));
//task2
// let sum = (num1, num2) => num1 + num2;
// console.log(sum(2, 3));
// let multiply = (num1, num2) => num1 * num2;
// console.log(multiply(2, 3));
// let subtruct = (num1, num2) => num1 - num2;
// console.log(subtruct(2, 3));
// let divide = (num1, num2) => num1 / num2;
// console.log(divide(2, 3));
//task3
// let calculator = function (num1, num2, operator) {
//   let result;
//   if (operator === "+") {
//     result = num1 + num2;
//   } else if (operator === "-") {
//     result = num1 - num2;
//   } else if (operator === "*") {
//     result = num1 * num2;
//   } else if (operator === "/") {
//     result = num1 / num2;
//   } else {
//     result = "Operatora uygun netice yoxdur.";
//   }
//   return result;
// };
// console.log(calculator(2, 3, "+"));
//task4
// const employees = [
//   { name: "Jamil", salary: 50000, department: "IT" },
//   { name: "Jale", salary: 60000, department: "HR" },
//   { name: "Bayram", salary: 55000, department: "IT" },
//   { name: "Sahil", salary: 75000, department: "HR" },
//   { name: "Maryam", salary: 65000, department: "IT" },
//   { name: "Elnara", salary: 80000, department: "HR" },
//   { name: "Davud", salary: 70000, department: "IT" },
// ];

// let filterEmployees = function (filterarr) {
//   let arr = [];
//   for (let i = 0; i < filterarr.length; i++) {
//     if (filterarr[i].salary > 60000) {
//       arr.push(filterarr[i]);
//     }
//   }
//   return arr;
// };

// console.log(filterEmployees(employees));
//task5
// let reverseString = function (revers) {
//   let reversStr = "";
//   for (let i = revers.length - 1; i >= 0; i--) {
//     reversStr += revers[i];
//   }
//   return reversStr;
// };

// console.log(reverseString("Hello"));
//task6
let str = "Lorem ipsum dolor sit amet, consectetur  .adipisicing elit. ?!.";
// let string = function (sentence) {
//   let count = 1;
//   for (let i = 0; i < sentence.length; i++) {
//     if (
//       sentence[i] !== " " &&
//       sentence[i] !== "." &&
//       sentence[i] !== "," &&
//       sentence[i] !== "?" &&
//       sentence[i] !== "!"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(string(str));
