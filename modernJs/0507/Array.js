// Array

const arr = [
  "상헌",
  "a",
  3,
  { a: 1 },
  () => {
    console.log("hello");
  },
  [1, 2, 3],
];

console.log(arr[0]); // 상헌
console.log(arr[4]()); // hello

console.log(arr.length); // 6
console.log([1, 2, 3].length); // 3

console.log(arr.indexOf(3)); // 2
console.log(arr.indexOf("b")); // -1

console.log(arr.push("new")); // 7
console.log(arr); // [ '상헌', 'a', 3, { a: 1 }, [Function], [ 1, 2, 3 ], 'new' ]

console.log(arr.pop()); // new
console.log(arr); // [ '상헌', 'a', 3, { a: 1 }, [Function], [ 1, 2, 3 ] ]

console.log(arr.filter((item) => typeof item === "string")); // [ '상헌', 'a' ]
console.log(arr.filter((item) => typeof item === "number")); // [ 3 ]
console.log(arr.filter((item) => typeof item === "object")); // [ { a: 1 }, [ 1, 2, 3 ] ]
console.log(
  arr.filter((_, index) => {
    if (index % 2 === 0) return true;
    else return false;
  })
); // [ '상헌', 3, [Function] ]

console.log(arr.reverse());
console.log(arr); // [ [ 1, 2, 3 ], [Function], { a: 1 }, 3, 'a', '상헌' ]
console.log(arr.reverse());
console.log(arr); // [ '상헌', 'a', 3, { a: 1 }, [Function], [ 1, 2, 3 ] ]

console.log(arr.join(" ")); // 상헌 a 3 [object Object] function () { console.log("hello"); } 1,2,3
console.log(arr.join("")); // 상헌a3[object Object]function () { console.log("hello"); }1,2,3

console.log([1, 2, 3].concat([1, 2, 3])); // [ 1, 2, 3, 1, 2, 3 ]

console.log(arr.slice(1, 3)); // [ 'a', 3 ]
console.log(arr.slice(2)); // [ 3, { a: 1 }, [Function], [ 1, 2, 3 ] ]

console.log(arr.map((item) => typeof item)); // [ 'string', 'string', 'number', 'object', 'function', 'object' ]
console.log([1, 2, 3].map((item) => item * 2)); // [ 2, 4, 6 ]
console.log([1, 2, 3, 4, 5].map((item) => item % 2 === 0)); // [ false, true, false, true, false ]

console.log([1, 2, 3, 2, 1, 4, 5687, 2125, 33].sort((a, b) => a - b)); //  [ 1, 1, 2, 2, 3, 4, 33, 5687, 2125 ]
console.log([1, 2, 3, 2, 1, 4, 5687, 2125, 33].sort((a, b) => b - a)); // [ 5687, 2125, 33, 4, 3, 2, 2, 1, 1 ]

console.log(arr.includes("상헌")); // true
console.log(arr.includes("상")); // false

console.log(arr.every((item) => typeof item === "string")); // false
console.log([1, 2, 3].every((item) => typeof item === "number")); // true
