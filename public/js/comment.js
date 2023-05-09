const postId = document.querySelector('#newCommentForm').dataset.postId

const newCommentFormHandler = async (event) => {
    event.preventDefault();

    const newComment = document.querySelector('#newCommentFormInput').value.trim();

    if (newComment) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ content: newComment, post_id: postId }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/home')
        } else {
            alert("New Comment Failed. Try Again.")
        }
    }
};

document.querySelector('#newCommentForm').addEventListener('submit', newCommentFormHandler);
