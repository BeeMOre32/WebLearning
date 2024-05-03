const url = "https://jsonplaceholder.typicode.com/posts/";

function ajax() {
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
