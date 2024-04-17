const numArray = [21, 19, 25, 30, 15, 20, 18, 35, 40, 1];

function isOver20(num) {
  if (num === 20) {
    console.log(num + "는 20입니다");
    return true;
  }
  if (num > 20) {
    console.log(num + "는 20보다 큽니다.");
    return true;
  }
  console.log(num + "는 20보다 작습니다.");
  return false;
}

for (let num of numArray) {
  isOver20(num);
}
