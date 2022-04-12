document.querySelectorAll('.post-dashboard').forEach( post => {
    post.addEventListener('click', event => {
        document.location.replace(`./dashboard/post/${event.currentTarget.id}`)
    })
})

document.querySelector('#create-post').addEventListener('click', event => {
    document.location.replace('./dashboard/post/')
})