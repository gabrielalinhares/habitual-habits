async function newFormHandler(event) {
    event.preventDefault();

    //can change based on handlebars
    const title = document.querySelector('input[name="blog-title"]').value;
    const blog_post = document.querySelector('textarea[name="blog-post"]').value;

    const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            blog_post
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

//update if class of form is different
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);