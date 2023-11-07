// -------------------------------------------------  TASK 1  -------------------------------------------------
const number = [1, 2, 3, 4, 5, 6, 7, 8];

// Tək ədədləri filter methodu vasitəsilə yeni bir dəyişkənə mənimsət:
// ====>   [1, 3, 5, 7]
let oddNum= number.filter((i)=> i%2===1)
console.log(oddNum);
// ----------- part II

 const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// 1 və 10 aralığındakı rəqəmləri consol-a çıxart
// ====>   [1,2,3,4,5,6,7,8,9,10]
let arrNum= array.filter((i)=> i>=1 && i<=10)
console.log(arrNum);

// -------------------------------------------------  TASK 2  -------------------------------------------------

const users = [
  {
    first_name: 'Mike',
    last_name: 'Sheridan'
  },
  {
    first_name: 'Tim',
    last_name: 'Lee'
  },
  {
    first_name: 'John',
    last_name: 'Carte'
  }
];

// Verilmiş array-də objectlərin first_name və last_name dəyişkənin aşağıdaki kimi göstərin.

// =====> ["Mike Sheridan", "Tim Lee", "John Carte"]
  let fullname=users.map((el,i)=>`${el.first_name} ${i.last_name}`)
  console.log(fullname);


//   -------------------------------------------------  TASK 3  -------------------------------------------------

const persons = [
    { name: "Akif", age: 25 },
    { name: "Aysu", age: 32 },
    { name: "Ali", age: 35 }
];

// find metodu vasitəsilə array-in içindəki, yaşı 30-dan yuxarı olan ilk şəxsi "firstPerson" adlı dəyişkənə
// mənimsədib console-a çıxardın. ====> { name: 'Aysu', age: 32 }
//  let firstPerson=persons.find(el=> el.age>30)
//  console.log(firstPerson);
// ------------------------------ part II

// tapdığınız objectin index-ni də ikinci bir console-da çıxardın.(metod ilə)
// let firstPerson=persons.findIndex(el=> el.age>30)
// console.log(firstPerson);
// -------------------------------------------------  TASK 4  -------------------------------------------------

const array1 = [1, 4, 9, 16];

// Verilmiş array-in hər bir elementini qüvvətə yüksəldin.   ======> [ 1, 16, 81, 256 ]
let square = array1.map((item)=>item**2)
console.log(square);

// -------------------------------------------------  TASK 5  -------------------------------------------------

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// Verilmiş animals array-ni slice metodu vasitəsilə aşağıdaki kimi yazmağa çalışın.

console.log(animals.slice(2));
// // Gözlənilən çıxış: ["camel", "duck", "elephant"]

console.log(animals.slice(2,4));
// // Gözlənilən çıxış: ["camel", "duck"]

console.log(animals.slice(1));
// // Gözlənilən çıxış: ["bison", "camel", "duck", "elephant"]

 console.log(animals.slice(3));
// // Gözlənilən çıxış: ["duck", "elephant"]

console.log(animals.slice(2,4));
// // Gözlənilən çıxış: ["camel", "duck"]

 console.log(animals.slice());
// // Gözlənilən çıxış: ["ant", "bison", "camel", "duck", "elephant"]
// -------------------------------------------------  TASK 6  -------------------------------------------------

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
// Expected output: ["Jan", "Feb", "March", "April", "June"]


//  months.splice(*, *, 'May');
console.log(months);
// Gözlənilən çıxış: ["Jan", "Feb", "March", "April", "May"]