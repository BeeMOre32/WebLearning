// 비밀번호의 조건문은 다음과 같습니다.

// 6자리 이상
// “tkdgjs” 이라는 글자가 들어가지 말것 (이어쓰는 경우만 생각)
// “30” 이라는 글자포함
// 데이터의 타입은 반드시 string

const passwordList = [
  "123456",
  "tkdgjs",
  12345630,
  "12345630",
  "12345630tkdgjs",
  "tkdgjsJJang30",
];

function validatePassword(password) {
  if (typeof password !== "string") {
    console.log("비밀번호는 문자열이어야 합니다." + password);
    return false;
  }
  if (password.length < 6) {
    console.log("비밀번호는 6자리 이상이어야 합니다." + password);
    return false;
  }
  if (password.includes("tkdgjs")) {
    console.log("비밀번호에 tkdgjs가 포함되어 있습니다." + password);
    return false;
  }
  if (!password.includes("30")) {
    console.log("비밀번호에 30이 포함되어 있지 않습니다." + password);
    return false;
  }
  console.log("비밀번호가 유효합니다." + password);
  return true;
}

for (let password of passwordList) {
  validatePassword(password);
}
