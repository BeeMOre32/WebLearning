// String

const myname = "상헌";
const job = "Developer";

console.log(myname.length); // 2

console.log(job.toUpperCase()); // DEVELOPER
console.log(job.toLowerCase()); // developer

console.log(myname.indexOf("헌")); // 1
console.log(myname.indexOf("연")); // -1

console.log(myname.split("")); // [ '상', '헌' ]
console.log(job.split("e")); // [ 'D', 'v', 'lop', 'r' ]
