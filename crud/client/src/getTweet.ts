import { getTweetData } from "./util/tweets";

export interface TweetList {
  _id: string;
  content: string;
  userId: UserID;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserID {
  _id: string;
  name: string;
  username: string;
  nickname: string;
}

export async function getTweets() {
  const tweetData = (await getTweetData()) as TweetList[];
  const tweetContainer = document.querySelector(".main-tweet");

  console.log(tweetData);

  const result = tweetData.map((tweet) => {
    const { userId, content, createdAt, _id } = tweet;
    const { username, nickname } = userId;

    return `
            <div class="tweet" data-tweetId="${_id}" >
                <div class="tweet-header">
                    <div class="tweet-info">
                        <div class="user-photo">
                          <i class="fas fa-user"></i>
                        </div>
                        <div class="tweet-username">${nickname}</div>
                        <div class="tweet-handle">@${username}</div>
                        <div class="tweet-time">1h</div>
                    </div>
                </div>
                <div class="tweet-content">
                    ${content}
                </div>
                <div class="tweet-actions">
                    <i class="far fa-comment"></i>
                    <i class="fas fa-retweet"></i>
                    <i class="far fa-heart"></i>
                    <i class="fas fa-share"></i>
                    <i class="fas fa-edit" id="tweet__edit"></i>
                    <i class="fas fa-trash" id="tweet__delete"></i>
                </div>
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
