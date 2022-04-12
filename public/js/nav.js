document.querySelector('#nav-login') && document.querySelector('#nav-login').addEventListener('click', async (event) => {
    event.preventDefault();
    document.location.replace('/login')
})

document.querySelector('#nav-logout') && document.querySelector('#nav-logout').addEventListener('click', async (event) => {
    event.preventDefault();
    if (confirm('Are you sure you wish to log out?')) {
        const response = await fetch('/api/users/logout', { method: 'POST' })
        if (response.ok) {
            alert('Successfully logged out!');
            document.location.replace('/')
        } else {
            alert('Something went terribly wrong!')
        }
    }
})

document.querySelector('#nav-home').addEventListener('click', event => {
    event.preventDefault();
    document.location.replace('/')
})

document.querySelector('#nav-dash').addEventListener('click', async (event) => {
    event.preventDefault();
    document.location.replace('/dashboard')
})