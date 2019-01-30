# Fetch and Display

Access the JSONPlaceholder API and output the results. Feel free to use your language of choice.

Some examples of what you might do:
- Create cards for each user displaying their profile information
- List all users/their information, with the option to update / delete their information *(Note: the resource will not really be updated / deleted on the server, but it will be faked as if)*
- Display each blog post, and the information of the user who made the post


Resources:
- https://jsonplaceholder.typicode.com/
- https://getbootstrap.com/
- https://jquery.com/

---

### Use JSONPlaceholder (https://jsonplaceholder.typicode.com/)

JSONPlaceholder comes with a set of 6 common resources:

`/posts	100 posts`

`/comments	500 comments`

`/albums	100 albums`

`/photos	5000 photos`

`/todos	200 todos`

`/users	10 users`

*Note: resources have relations. For example: posts have many comments, albums have many photos, etc*


### Available Routes

All HTTP methods are supported.

`GET	/posts`

`GET	/posts/1`

`GET	/posts/1/comments`

`GET	/comments?postId=1`

`GET	/posts?userId=1`

`POST	/posts`

`PUT	/posts/1`

`PATCH	/posts/1`

`DELETE	/posts/1`
