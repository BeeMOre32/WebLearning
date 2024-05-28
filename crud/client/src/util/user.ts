export type registerUserData = {
  name: string;
  username: string;
  password: string;
  nickname: string;
};

export async function registerUser(data: registerUserData) {
  const response = await fetch("http://localhost:3000/register", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

export type loginUserData = {
  username: string;
  password: string;
};

export async function loginUser(data: loginUserData) {
  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}
