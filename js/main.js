// your javascript

$(document).ready(function(){

  const URL = "https://jsonplaceholder.typicode.com/users";
  const POSTS = "https://jsonplaceholder.typicode.com/posts";

  const userContainer = document.getElementById('users-container');

  const row = document.createElement('div');
  row.className = "row";
  row.id = "users-row";
  userContainer.appendChild(row);

  const fetchUsers = () => {
    return fetch(URL)
      .then(res => res.json())
      .then(buildUserCards);
  };

  const buildUserCards = (users) => {

    console.log('Full Users', users)
    return users.forEach(user => {

      const total = fetchPostsTotal(user['id']);

      console.log('Test Total', total.length);

      const userCard = document.createElement('div');
      userCard.id = "user-" + user['id'];
      userCard.className = "user-card col-sm";
      userCard.onclick = () => {
        randomPost(user['id']);
      };

      const name = document.createElement('h4');
      name.innerText = user['name'];
      name.className = "real-name";

      const br = document.createElement('hr');

      const username = document.createElement('p');
      username.innerText = user['username'];
      username.className = "username";

      const userEmail = document.createElement('p');
      userEmail.innerText = user['email'];
      userEmail.className = "user-email";

      const totalUserPosts = document.createElement('p');
      totalUserPosts.id = 'user-posts-' + user['id'];
      totalUserPosts.className = "total-posts";

      // debugger;
      userCard.append(name, br, username, userEmail, totalUserPosts);
      row.appendChild(userCard);
    });
  };

  // resolved async issue by making the change occur after the fetch
  async function fetchPostsTotal(id) {
   try {
     const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
     const resp = await fetch(url)
      .then(res => res.json())
      .then(posts => {
        document.getElementById(`user-posts-${id}`).innerText = "Total Posts: " + posts.length;
      });
     return resp;
   } catch (err) {
      console.log(err);
     };
   };

  const randomPost = (id) => {
    const userCard = document.getElementById(`user-${id}`);
    userCard.innerHTML = '';

    const postContent = document.createElement('div');
    postContent.className = 'post-content';

    const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;

    return fetch(url)
      .then(res => res.json())
      .then(posts => {
        const post = posts[Math.floor(Math.random() * 10)];

        const title = document.createElement('h4');
        title.innerText = post['title'];
        title.className = 'post-title';

        const hr = document.createElement('hr');

        const body = document.createElement('p');
        body.innerText = post['body'];
        body.className = 'post-body';

        userCard.onclick = () => {
          restoreUser(id);
        };

        postContent.append(title, hr, body);
        userCard.appendChild(postContent);
      });
  };

  const restoreUser = (id) => {
    const userCard = document.getElementById(`user-${id}`);
    userCard.innerHTML = '';

    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    return fetch(url)
      .then(res => res.json())
      .then(user => {
        const total = fetchPostsTotal(id);

        userCard.onclick = () => {
          randomPost(user['id']);
        };

        const name = document.createElement('h4');
        name.innerText = user['name'];
        name.className = "real-name";

        const br = document.createElement('hr');

        const username = document.createElement('p');
        username.innerText = user['username'];
        username.className = "username";

        const userEmail = document.createElement('p');
        userEmail.innerText = user['email'];
        userEmail.className = "user-email";

        const totalUserPosts = document.createElement('p');
        totalUserPosts.id = 'user-posts-' + id;
        totalUserPosts.className = "total-posts";

        // debugger;
        userCard.append(name, br, username, userEmail, totalUserPosts);
      });
    };

  // initiate build
  fetchUsers();

});
