// https://jsonplaceholder.typicode.com/posts/

const url = "https://jsonplaceholder.typicode.com/posts/";

function oldAjax() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);
    }
  };
  xhr.send();

  return xhr;
}

async function fetchAjax() {
  const result = await fetch(url);
  const data = await result.json();
  console.log(data);
}
