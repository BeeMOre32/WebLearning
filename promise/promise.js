// promis

// map

const arr = [1, 2, 234, 412, 333, 4123];

function checkOdd(num) {
  if (num % 2 === 0) console.log("Even");
  else console.log("Odd");
}

arr.map(checkOdd);

// promise

function checkOddPromise(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) resolve("Even");
    else reject(new Error("Odd"));
  });
}

arr.map(checkOddPromise).forEach((promise) => {
  promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => console.log("Done"));
});
