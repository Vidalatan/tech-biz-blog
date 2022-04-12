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
            document.location.reload()
        } else {
            alert('Something went terribly wrong...')
        }
    } else {
        alert('Please add content to your comment before attempting to post it...')
    }
})