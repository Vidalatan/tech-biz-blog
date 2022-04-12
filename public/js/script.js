document.querySelectorAll('.post-format') && document.querySelectorAll('.post-format').forEach( post => {
    post.addEventListener('click', event => {
        event.preventDefault();
        document.location.replace(`/dashboard/post/${event.currentTarget.id}`)
    })
})