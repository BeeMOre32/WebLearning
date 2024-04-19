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

const passwordInput = document.getElementById("password");

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
