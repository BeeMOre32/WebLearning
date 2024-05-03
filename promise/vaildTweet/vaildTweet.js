const tweetInput = document.querySelector(".main-twiite__input input");
const tweetBtn = document.querySelector(".main-twiite__input button");

function vaildTweet(text) {
  return new Promise((resolve, reject) => {
    if (text.includes("상헌")) {
      reject(new Error("상헌이라는 문자열은 사용할 수 없습니다."));
    } else if (!text.includes("0507")) {
      reject(new Error("0507이라는 문자열을 포함해야 합니다."));
    } else if (text.length < 10 || text.length > 150) {
      reject(new Error("10자 이상 150자 미만으로 입력해주세요."));
    } else {
      resolve(text);
    }
  });
}

tweetBtn.addEventListener("click", () => {
  vaildTweet(tweetInput.value)
    .then((text) => {
      alert("트윗이 성공적으로 등록되었습니다." + text);
    })
    .catch((error) => {
      alert(error.message);
    });
});
