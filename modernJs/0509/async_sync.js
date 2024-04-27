function asyncFunction() {
  console.log("Async Hello1");
  setTimeout(() => {
    console.log("Async Hello2");
  }, 0);
}

console.log("Hello");
asyncFunction();
console.log("World");

// hello
// async hello 1
// world
// async hello 2
