let arr = new Array();

let itCompaines = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(itCompaines.length);
console.log(itCompaines);
console.log(itCompaines[itCompaines.length - 1]);
console.log(itCompaines[0]);
console.log(itCompaines[parseInt(itCompaines.length / 2)]);
let newCompanies = [];
for (let i = 0; i < itCompaines.length; i++) {
  //   console.log(itCompaines[i].toLocaleUpperCase());
  newCompanies.push(itCompaines[i].toLocaleUpperCase());
}
console.log(newCompanies);



console.log(` ${itCompaines.toString()} boyuk IT sirketlerdir`);

