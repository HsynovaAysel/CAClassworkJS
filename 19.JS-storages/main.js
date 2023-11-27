let fullName="Aysel Huseynova"
let age =21;
let skills=['yatmaq','yemek','oxumaq']
localStorage.setItem('fullName',fullName)
localStorage.setItem('age',age)
localStorage.setItem('skills',JSON.stringify(skills))
console.log(localStorage.getItem('fullName'));
console.log(localStorage.getItem("age"));
console.log(JSON.parse(localStorage.getItem("skills")));