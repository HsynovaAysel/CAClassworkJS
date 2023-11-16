// // 1. arrayın içindəki müsbət ədədləri tapın
// let arr = [2, 4, -3, 43, 41, -3];

// // function findPositives(array) {
// //   array.forEach((el) => {
// //     if (el > 0) {
// //       console.log(el);
// //     }
// //   });
// // }
// // function findPositives(array) {
// //   console.log(array.filter((el)=> el>0 ));

// // }
// // findPositives(arr);

// // 2. üçbucağın tərəfləri verilib, düzbucaqlı üçbucaq olub olmamasını tapın
// function isRectangle(a, b, c) {
//   if (
//     a ** 2 + b ** 2 === c ** 2 ||
//     b ** 2 + c ** 2 === a ** 2 ||
//     a ** 2 + c ** 2 === b ** 2
//   ) {
//     return `yes`;
//   } else {
//     return `no`;
//   }
// }

// console.log(isRectangle(3, 4, 5)); //yes
// console.log(isRectangle(3, 6, 5)); //no
// console.log(isRectangle(4, 5, 3)); //yes

// // 3. arrayın içindəki bütün hərfləri böyük olan elementin indexini tapın
// const webTechs = ["html", "CSS", "js", "REACT", "Redux", "Node", "MongDB"];

// console.log(webTechs.findIndex((el) => el.toLocaleUpperCase() === el));
// // 4. arrayın içindəki bütün hərfləri böyük olan elementləri başqa bir array şəklində return edin
// const webTechs2 = ["HTML", "CSS", "JS", "REACT", "Redux", "Node", "MongDB"];
// console.log(webTechs2.filter((el) => el.toLocaleUpperCase() === el));

// // 5. Reverse the Case
// // Given a string, create a function called "reverseCase(str)" that to reverse the case.
// //  All lower-cased letters should be upper-cased, and vice versa.

// function reverseCase(str) {
//   if (str === str.toLocaleUpperCase()) {
//     return str.toLocaleLowerCase();
//   } else {
//     return str.toLocaleUpperCase();
//   }
// }
// console.log(reverseCase("MANY THANKS"));
// console.log(reverseCase("many thanks")); //"many thanks" //"MANY THANKS"
// const users = [
//   {
//     name: "Anar",
//     surname: "Hesenli",
//     age: "22",
//     uni: "ADA",
//     gender: "male",
//     salary: "3001",
//   },
//   {
//     name: "Nicat",
//     surname: "Sadiqov",
//     age: "25",
//     uni: "GDU",
//     gender: "male",
//     salary: "200",
//   },
//   {
//     name: "Nezrin",
//     surname: "Reshidova",
//     age: "23",
//     uni: "UNEC",
//     gender: "female",
//     salary: "300",
//   },
//   {
//     name: "Hikmet",
//     surname: "Hesenov",
//     age: "22",
//     uni: "UNEC",
//     gender: "male",
//     salary: "320",
//   },
//   {
//     name: "Murad",
//     surname: "Salmanli",
//     age: "23",
//     uni: "GDU",
//     gender: "male",
//     salary: "420",
//   },
//   {
//     name: "Aynure",
//     surname: "Hesenzade",
//     age: "23",
//     uni: "BMU",
//     gender: "female",
//     salary: "3210",
//   },
// ];

// // 2.1.Show users who is studying at 'UNEC' and surname starts 'r'.
// let result = users.filter(
//   (el) =>
//     el.uni.toLocaleLowerCase() === "unec" &&
//     el.surname.toLocaleLowerCase().startsWith("r")
// );
// console.log(result);
// // 2.2.Show users whose age is eqaul to 22 and name start 'a'.
// let newUsers= users.filter(el=> el.age==='22'&& el.name.toLocaleLowerCase().startsWith('a') )
// console.log(newUsers);
// // 2.4.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').
// let updateUser=users.map( el=>{
//     if(el.gender==='female'){
//         return {...el, name: ` Mrs ${el.name}`}
//     }else{
//         return {...el, name: ` Mrs ${el.name}`}
//     }
// })
// console.log(updateUser);
// // 2.3.Sort users by age (ascending).

// users.sort((a,b)=>a.age-b.age)
// console.log(users);
let employees = [
  {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
];

//   Find the employee who has many skills in the employees object.
// let max = employees[0];

// let newEmp = employees.forEach((el) => {
//   if(el.skills.length>max.skills.length){
//     max=el
//   }

// });

// console.log(max);

// isLoggedIn true olanları array şəklində return edin

let res = employees.map((el) => {
  if (el.isLoggedIn) {
    return el;
  }
});
console.log(res);
// age'ə görə sort edin
// let ageSort=employees.sort((a,b) =>(a,b)=>a.age-b.age)
// Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin
let numArr=[2,6,3,9,7]
function randomNumber(arr) {
    let random= Math.floor(Math.random()*10)
    if(arr.inclueds(random)){
        return ``
    }
    
}