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

function isOver20Age(date) {
  const today = new Date();
  const birthdate = new Date(date);
  const age = today.getFullYear() - birthdate.getFullYear();

  if (age === 20) {
    console.log(age + "세입니다.");
    return true;
  }
  if (age > 20) {
    console.log(age + "세로 20세 이상입니다.");
    return true;
  }
  console.log(age + "세로 20세 미만입니다.");
  return false;
}

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const birthdateInput = document.getElementById("birthdate");

const form = document.querySelector("form");

passwordInput.addEventListener("change", (event) => {
  const password = event.target.value;
  const isValid = validatePassword(password);

  if (password.length === 0) {
    console.log("비밀번호를 입력해주세요." + password);
    passwordInput.classList.remove("invalid");
    const errorMessage = document.querySelector(".error-message");
    if (errorMessage) {
      errorMessage.remove();
    }
    return;
  }
  if (!isValid) {
    passwordInput.classList.add("invalid");

    const errorMessage = document.createElement("div");
    errorMessage.textContent = "비밀번호가 유효하지 않습니다.";
    errorMessage.classList.add("error-message");

    passwordInput.insertAdjacentElement("afterend", errorMessage);
  } else {
    passwordInput.classList.remove("invalid");
    const errorMessage = document.querySelector(".error-message");
    if (errorMessage) {
      errorMessage.remove();
    }
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const birthdate = birthdateInput.value;

  const isValidPassword = validatePassword(password);
  const isValidBirthdate = isOver20Age(birthdate);

  if (isValidPassword && isValidBirthdate) {
    console.log(
      "회원가입에 성공했습니다." + name + email + password + birthdate
    );
  } else {
    console.log("회원가입에 실패했습니다. 그 이유는 다음과 같습니다.");

    if (!isValidPassword) {
      console.log("비밀번호가 유효하지 않습니다." + password);
    }
    if (!isValidBirthdate) {
      console.log("나이가 유효하지 않습니다." + birthdate);
    }
  }
});
