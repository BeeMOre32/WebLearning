const url = "http://localhost:3000";

type createTweetData = {
  text: string;
};

type updateTweetData = {
  text: string;
  id: string;
};

export const getTweetData = async () => {
  const response = await fetch(`${url}/tweet`);
  return response.json();
};

export const createTweet = async (data: createTweetData) => {
  const { text } = data;
  const token = localStorage.getItem("token");

  const response = await fetch(`${url}/tweet`, {
    method: "POST",
    body: JSON.stringify({ text }),
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token || "",
    },
  });

  return response.json();
};

export const updateTweet = async (data: updateTweetData) => {
  const { text, id } = data;
  const response = await fetch(`${url}/tweet/${id}`, {
    method: "PUT",
    body: JSON.stringify({ text }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const deleteTweet = async (id: string) => {
  const response = await fetch(`${url}/tweet/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
