const url = "http://localhost:3000";

type createTweetData = {
  text: string;
  userId: number;
};

type updateTweetData = {
  text: string;
  id: number;
};

export const getTweetData = async () => {
  const response = await fetch(`${url}/tweet`);
  return response.json();
};

export const createTweet = async (data: createTweetData) => {
  const { text, userId } = data;
  const response = await fetch(`${url}/tweet`, {
    method: "POST",
    body: JSON.stringify({ text, userId }),
  });

  return response.json();
};

export const updateTweet = async (data: updateTweetData) => {
  const { text, id } = data;
  const response = await fetch(`${url}/tweet/${id}`, {
    method: "PUT",
    body: JSON.stringify({ text }),
  });

  return response.json();
};

export const deleteTweet = async (id: number) => {
  const response = await fetch(`${url}/tweet/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
