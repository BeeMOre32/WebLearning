// 1. 변수 호이스팅

hoistiedVar = "상헌";
console.log(hoistiedVar); // 상헌
var hoistiedVar;

hoistiedLet = "상헌";
// console.log(hoistiedLet); // ReferenceError: Cannot access 'hoistiedLet' before initialization
let hoistiedLet;

// 2. 함수 호이스팅

console.log(hoistiedFunc()); // 상헌

function hoistiedFunc() {
  return "상헌";
}

console.log(hoistiedFunc2()); // TypeError: hoistiedFunc2 is not a function

const hoistiedFunc2 = function () {
  return "상헌";
};
