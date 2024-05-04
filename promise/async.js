// async await

const promiseFun = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("성공");
    }, 1000);
  });
};

function activatePromise() {
  const result = promiseFun().then((result) => result);
  console.log(result);
}

async function activateAsync() {
  const result = await promiseFun();
  console.log(result);
}

activatePromise();
activateAsync();
