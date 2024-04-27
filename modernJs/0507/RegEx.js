const expression1 = /\d+/;
const expression2 = /hello/;
const expression3 = /he..o/;
const expression4 = /h/;

console.log(expression.test("123")); // true
console.log(expression.test("abc")); // false
console.log(expression2.test("hello")); // true
