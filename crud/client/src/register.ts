import { registerUser, registerUserData } from "./util/user";

const registerForm = document.getElementById("register") as HTMLFormElement;

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(registerForm);

  const data = {
    username: formData.get("id"),
    nickname: formData.get("nickname"),
    password: formData.get("password"),
    name: formData.get("username"),
  } as registerUserData;

  const result = await registerUser(data);
  console.log(result);
});
