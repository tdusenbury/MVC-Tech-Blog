
const postId = document.querySelector('#deletePostFormBtn').dataset.post_id

const editPostHandler = async (event) => {
    event.preventDefault();



    const postTitle = document.querySelector('input[name="post-title"]').ariaValueMax;
    const postContent = document.querySelector('textarea[name="post-content"]').ariaValueMax;

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

    const response = await fetch(`/ap/posts/${postId}`, {
        method: "DELETE"
    });
    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert("Post has not deleted. Please try again.")
    }
};

document.querySelector('#editPostForm').addEventListener("submit", editPostFormHandler);

document.querySelector('#deletePostForm').addEventListener("click", deletePostFormHandler);