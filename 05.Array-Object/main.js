//task1
// const numbers = [12, 45, 6, 78, 34, 99, 23];
// let max = numbers[0];
// let min = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max=numbers[i]
//   }else if(numbers[i] < min){
//     min=numbers[i]
//   }
// }
// console.log(`max:${max},min:${min}`);

//task2
// const numbers = [12, 45, 6, 78, 34, 99, 23];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);
// task3
// const elements=[1,2,3,4,5]
// let temp;
// temp=elements[2]
// elements[2]=elements[3]
// elements[3]=temp
// console.log(elements);
//task4
const numbers = [12, -5, 6, -3, 34, -1, 23];
let elements = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    elements.push(...numbers)
    console.log(elements[i]);
  }

  
}
