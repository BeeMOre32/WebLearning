import { deleteTweet, getTweetData, updateTweet } from "./util/tweets";

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

  const result = tweetData.map((tweet) => {
    const { userId, content, createdAt, _id } = tweet;
    const { username, nickname } = userId;

    return `
      <div class="tweet">
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
          <div class="tweet__edit" data-id="${_id}">
            <i class="fas fa-edit"></i>
          </div>
          <div class="tweet__delete" data-id="${_id}">
            <i class="fas fa-trash"></i>
          </div>
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

    tweetContainer.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;

      const editButton = target.closest(".tweet__edit");
      const deleteButton = target.closest(".tweet__delete");

      if (editButton) {
        const tweetId = editButton.getAttribute("data-id");
        handleEdit(tweetId as string);
      }

      if (deleteButton) {
        const tweetId = deleteButton.getAttribute("data-id");
        handleDelete(tweetId as string);
      }
    });
  } else {
    console.error("Tweet container not found.");
  }
}

async function handleEdit(tweetId: string) {
  const tweetContent = prompt("Edit your tweet:");

  if (tweetContent) {
    const result = await updateTweet({ id: tweetId, text: tweetContent });

    if (result) {
      getTweets();
    } else {
      console.error("Failed to update tweet.");
    }
  }
}

async function handleDelete(tweetId: string) {
  const isDelete = confirm("트윗을 삭제하시겠습니까?");

  if (isDelete) {
    const data = await deleteTweet(tweetId);
    data ? getTweets() : console.error("Failed to delete tweet.");
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
