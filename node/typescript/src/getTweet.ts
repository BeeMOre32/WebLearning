// https://jsonplaceholder.typicode.com/posts

// "id": 1,
// "name": "Leanne Graham",
// "username": "Bret",

interface User {
  id: number;
  name: string;
  username: string;
}

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getUserById(id: number): Promise<User> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  return data;
}

async function getTweetData(): Promise<Posts[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

export async function getTweets() {
  const data = await getTweetData();

  const tweetContainer = document.querySelector(".main-tweet");
  const tweetData = data.splice(0, 10);

  console.log(tweetData);

  const userIds = Array.from(new Set(tweetData.map((tweet) => tweet.userId)));
  const users = await Promise.all(userIds.map((id) => getUserById(id)));

  const result = tweetData.map((tweet) => {
    const user = users.find((user) => user.id === tweet.userId);

    return `
            <div class="tweet">
                <div class="tweet-header">
                    <div class="tweet-info">
                        <div class="user-photo">
                        <i class="fas fa-user"></i>
                        </div>
                        <div class="tweet-username">${
                          user ? user.username : "undefined"
                        }</div>
                        <div class="tweet-handle">@${
                          user ? user.username : "undefined"
                        }</div>
                        <div class="tweet-time">1h</div>
                    </div>
                </div>
                <div class="tweet-content">
                    ${tweet.body}
                </div>
                <div class="tweet-actions">
                    <i class="far fa-comment"></i>
                    <i class="fas fa-retweet"></i>
                    <i class="far fa-heart"></i>
                    <i class="fas fa-share"></i>
                </div>
            </div>
        `;
  });

  if (tweetContainer) {
    tweetContainer.innerHTML = result.join("");
  }
}

getTweets();

// 삼항연산자

// user ? user.username : "undefined"

// if(user) {
//   return user.username;
// } else {
//   return "undefined";
// }
