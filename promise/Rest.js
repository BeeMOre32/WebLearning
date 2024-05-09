const url = "https://jsonplaceholder.typicode.com/posts";

async function fetchPost(requestType, data) {
  const response = await fetch(url, {
    method: requestType,
    body: JSON.stringify(data),
  });

  return await response.json();
}

fetchPost("GET").then((data) => console.log(data));
fetchPost("POST", { title: "foo", body: "bar", userId: 1 }).then((data) =>
  console.log(data)
);
fetchPost("PUT", { id: 1, title: "foo", body: "bar", userId: 1 }).then((data) =>
  console.log(data)
);
fetchPost("DELETE", { id: 1 }).then((data) => console.log(data));

// Output
