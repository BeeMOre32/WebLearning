import { loginUser, loginUserData } from "./util/user";

const loginForm = document.getElementById("login") as HTMLFormElement;

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(loginForm);

  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
  } as loginUserData;

  const result = await loginUser(data);
  console.log(result);
});
