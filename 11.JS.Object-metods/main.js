let person = {
  firstName: "Aysel",
  lastName: "Huseynova",
  age: 21,
  skills: ["yatmaq", "oxumaq", "oynamaq"],
  university: "GDU",
};
person.city = "Goranboy";

person["phone number"] = 994501111111;

//1.
console.log(Object.keys(person));
// 2.
console.log(Object.values(person));
// 3.
console.log(Object.entries(person));
// 4.
//delete person.age;console.log(person);
// 5.

let arr = Object.values(person);
let res = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (res.length < arr[i].length) {
    res = arr[i];
  }
}
console.log(res);

// ---------------------------------------------------------- TASK 2 ----------------------------------------------------------

var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    readingStatus: true,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    readingStatus: true,
  },
  {
    title: "Suzanne Collins",
    author: "Mockingjay: The Final Book",
    readingStatus: false,
  },
];

// "library" adlı array yaradın. İçərisində title, author və readingStatus adlı key-ləri olan objectlər yaradın.
// Əgər readingStatus true olarsa console-a "Already read 'title' by author' Əgər false
// olarsa "You still need to read 'title' by author' yazsın
let result;
for (let i = 0; i < library.length; i++) {
  if (library[i].readingStatus === true) {
    console.log(`Already read ${library[i].title} by Bill Gates.`);
  } else {
    console.log(
      `You still need to read ${library[i].title}by Mockingjay: The Final Book.`
    );
  }
}
// Nəticə ====>>
// Already read 'The Road Ahead' by Bill Gates.
// Already read 'Walter Isaacson' by Steve Jobs.
//

// ---------------------------------------------------------- TASK 3 ----------------------------------------------------------

let employee = {
  name: "Aysel",
  jobTitle: "Software Developer",
  salary: 75000,
  promote: function (p1, p2) {
    this.jobTitle = p1;
    this.salary = p2;
    console.log(
      `Promotion: Alice is now ${this.jobTitle} with a salary of ${this.salary}`
    );
  },
};
// "employee" adlı object yaradın. Object-in name, jobTitle, salary və promote adında key-ləri var.
// promote bir anonim function-dır, 2 parametr qəbul edir. jobTitle-in value-ı ilk dəfə "Software Developer" salary isə 75000.
// Ən sonda employee.promote-a bir yeni vəzifə və yeni maaş göndərin.

employee.promote("Senior Software Engineer", 90000);
console.log(employee);
// Nəticə: Promotion: Alice is now Senior Software Engineer with a salary of $90000

// ---------------------------------------------------------- TASK 4 ----------------------------------------------------------

const name = {
  firstName: "Philip",
  lastName: "Fry",
};

const details = {
  job: "Delivery Boy",
  employer: "Planet Express",
};

// Object methodu ilə character objecti təyin edib aşağıdakı kimi console-a çıxardın.
let character = new Object();
character.firstName = "Philip";
character.lastName = "Fry";
character.employer = "Planet Express";
console.log(character);
// {firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}

// ---------------------------------------------------------- TASK 5 ----------------------------------------------------------

// ladder adlı object yaradın. step adında dəyəri 0-olan key yazın. Bundan əlava object-in 2 ayrı function-ı olsun. up və down.
// up function step-in dəyərin +1 artırsın. down isə -1 azaltsın.
let ladder = {
  step: 0,
  up() {
   this.step += 1;
  },
  down() {
    this.step -= 1;
  },
};

ladder.up();
ladder.up();
ladder.up();
console.log(ladder);
