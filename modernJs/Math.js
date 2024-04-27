const random = Math.random();

console.log(random); // 0.123456712939

console.log(Math.floor(random)); // 0
console.log(Math.floor(182.34012)); // 182

console.log(Math.ceil(random)); // 1
console.log(Math.ceil(182.34012)); // 183

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInt(1, 10)); // 4
