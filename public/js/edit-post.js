
const postId = document.querySelector('#deletePostFormBtn').dataset.post_id

const editPostHandler = async (event) => {
    event.preventDefault();
console.log("This is working")

    const postTitle = document.querySelector('input[name="postTitle"]').value;
    const postContent = document.querySelector('textarea[name="post-content"]').value;

    const response = await fetch(`/api/posts/${postId}`, {
        method: "PUT",
        body: JSON.stringify({ title: postTitle, content: postContent }),
        headers: {'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert("Post has not updated. Please try again.")
    }
};

const deletePostFormHandler = async (event) => {
    event.preventDefault();
console.log(postId)
    const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE"
    });
    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        console.log(response)
        alert("Post has not deleted. Please try again.")
    }
};

document.querySelector('#editPostForm').addEventListener("submit", editPostHandler);

document.querySelector('#deletePostForm').addEventListener("click", deletePostFormHandler);