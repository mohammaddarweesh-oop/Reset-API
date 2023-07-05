let getPosts = (userId) => {
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://jsonplaceholder.typicode.com/posts?userId=" + userId
  );
  request.responseType = "json";
  request.send();

  request.onload = function () {
    console.log(request.status);
    if (request.status >= 200 && request.status < 300) {
      let posts = request.response;
      document.getElementById("posts").innerHTML = "";
      for (post of posts) {
        let content = `
            <div id="post" >
            <h3>${post.title}</h3>
            <h4>${post.body}</h4>
        </div>
        `;
        document.getElementById("posts").innerHTML += content;
      }
    }
  };
};

let getUsers = () => {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.responseType = "json";
  request.send();

  request.onload = function () {
    console.log(request.status);
    if (request.status >= 200 && request.status < 300) {
      let users = request.response;
      document.getElementById("users").innerHTML = "";
      for (user of users) {
        let content = `
              <div id="user" onclick="userClicked(${user.id},this)">
              <h3>${user.name}</h3>
              <h4>${user.email}</h4>
          </div>
          `;
        document.getElementById("users").innerHTML += content;
      }
    }
  };
};

getUsers();
getPosts(1);
let userClicked = (id, element) => {
  //   alert("user id : " + id);
  console.log(element);
  let selected = document.getElementsByClassName("selected");
  for (el of selected) {
    el.classList.remove("selected");
  }
  element.classList.add("selected");
  getPosts(id);
};
