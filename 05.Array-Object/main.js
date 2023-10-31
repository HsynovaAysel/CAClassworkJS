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
// const numbers = [12, -5, 6, -3, 34, -1, 23];
// let elements = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     elements.push(numbers[i])
//     console.log((numbers[i]))
//       }
//     }
//task5
// const originalArray = [1, 2, 3, 4];
// let newArray = [];
// let n = 3;
// for (let i = 0; i < originalArray.length; i++) {
//   for (let j = 0; j < n; j++) {
//     newArray.push(originalArray[i]);
//   }
// }
// console.log(newArray);
//task6
// const numbers = [12, 45, 6, 78, 34, 99, 23];
// let even = [];
// let odd = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     even.push(numbers[i]);
//   } else {
//     odd.push(numbers[i]);
//   }
// }
// console.log(even);
// console.log(odd);
//task 7
// const originalArray=[1,2,3,4,5];
// let reversArray=[];
// for(let i =originalArray.length-1; i >= 0; i--){
//     reversArray.push(originalArray[i])
// }
// console.log(reversArray);


//OPTIONAL HOMETASK
//task1
//   let arr=[3,8,2,5,4,10,7,6];
//  let newarr=[];
//   for (let i=0; i<arr.length; i++){
//     if(arr[i]%2===1){
//         newarr.push(i)
//     }
//   }
// console.log(newarr);
// task2
//  let arr=[3,8,2,5,4,10,7,6];
//  let newarr=[];
//   for (let i=0; i<arr.length; i++){
//     if(arr[i]%2===1){
//         newarr.push(arr[i])
//     }
//   }
// console.log(newarr);
//task3
//   let arr=[3,8,2,5,4,10,7,6];
//  let max = arr[0];
//   for (let i=0; i<arr.length; i++){
//     if(arr[i]%2===0){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//   }
//  console.log(`let num = ${max}`);