const newPostFormHandler = async (event) => {
    event.preventDefault();

    const newPostTitle = document.querySelector('#newPostTitleInput').value.trim();
    const newPostContent = document.querySelector('#newPostContentInput').value.trim();

    if (newPostTitle && newPostContent) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title: newPostTitle, content: newPostContent }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/home')
        } else {
            alert("New Post Failed. Try Again.")
        }
    }
};
document.querySelector('#newPostForm').addEventListener('submit', newPostFormHandler);


// const newPostForm = document.getElementById('newPostForm');
// const userPostArea = document.querySelector('.userPostArea');

// newPostForm.addEventListener('submit', (event) => {
//   event.preventDefault(); // prevent form submission

//   // get values from input fields
//   const title = document.getElementById('newPostTitleInput').value.trim;
//   const content = document.getElementById('newPostContentInput').value.trim;

//   // create new post object
//   const newPost = {
//     title: title,
//     content: content,
//     date_created: new Date() // use current date as default
//   }
// });