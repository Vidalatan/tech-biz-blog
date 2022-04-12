document.querySelectorAll('.post-dashboard') && document.querySelectorAll('.post-dashboard').forEach( post => {
    post.addEventListener('click', event => {
        document.location.replace(`./dashboard/post/${event.currentTarget.id}`)
    })
})

document.querySelector('#create-post') && document.querySelector('#create-post').addEventListener('click', event => {
    document.location.replace('./dashboard/post/')
})

document.querySelector('#add-comment') && document.querySelector('#add-comment').addEventListener('click', event => {
    event.preventDefault()

    if (document.querySelector('.add-comment-off')) {
        event.currentTarget.innerText = '❌ Cancel'
        document.querySelector('.add-comment-off').className = 'add-comment-on'
    } else {
        event.currentTarget.innerText = 'Add Comment'
        document.querySelector('.add-comment-on').className = 'add-comment-off'
    }
})

document.querySelector('.comment-form') && document.querySelector('.comment-form').addEventListener('submit', async event => {
    event.preventDefault()
    const content = document.querySelector('#comment-area').value.trim()
    const post_id = document.querySelector('.single-post').id

    if (content) {
        const response = await fetch('/api/comments/new', {
            method: 'POST',
            body: JSON.stringify( {content, post_id} ),
            headers: { 'Content-Type': 'application/json' }
        })
        if (response.ok) {
            document.location.reload();
        } else {
            alert('Something went terribly wrong...')
        }
    } else {
        alert('Please add content to your comment before attempting to post it...')
    }
})

document.querySelector('#edit-post') && document.querySelector('#edit-post').addEventListener('click', async event => {
    const editBtn = document.querySelector('#edit-post')
    const postContent = document.querySelector('#post-content')
    if (editBtn.innerText === 'Edit') {
        const origCont = postContent.innerText
        editBtn.className = 'btn btn-danger'
        editBtn.innerText = 'Confirm'
        postContent.innerHTML = `<textarea name="new-content" id="new-content" cols="30" rows="10">${origCont}</textarea>`
    } else {
        const response = await fetch('/api/posts/edit', {
            method: 'PUT',
            body: JSON.stringify({
                content: postContent.childNodes[0].value.trim(),
                post_id: postContent.parentNode.id
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (response.ok) {
            document.location.reload();
        } else {
            alert('Something went terribly wrong...')
        }
    }
})