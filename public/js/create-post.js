document.querySelector('.create-post-form').addEventListener('submit', async event => {
    event.preventDefault()
    const title = document.querySelector('#title-create').value.trim();
    const content = document.querySelector('#content-create').value.trim();

    if (title && content) {
        const response = await fetch('/api/posts/new', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json'}
        })
        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert('Something went terribly wrong...')
        }
    } else {
        alert('Please add both a title and content to your post.')
    }
})