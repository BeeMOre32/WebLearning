const obj = {
  name: "상헌",
  age: 52,
  job: "developer",
  print: function () {
    console.log(
      this.name + "님은 " + this.age + "세이고 " + this.job + "입니다."
    );
  },
};

console.log(obj.name); // 상헌
console.log(obj.age); // 52
console.log(obj.job); // developer
console.log(obj.print); // [Function: print]

console.log(Object.assign({ hobby: "soccer" }, obj));
// { hobby: 'soccer', name: '상헌', age: 52, job: 'developer', print: [Function: print] }

console.log(Object.keys(obj)); // [ 'name', 'age', 'job', 'print' ]

console.log(Object.values(obj)); // [ '상헌', 52, 'developer', [Function: print] ]

console.log(Object.entries(obj)); // [ [ 'name', '상헌' ], [ 'age', 52 ], [ 'job', 'developer' ], [ 'print', [Function: print] ] ]

console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("hobby")); // false
