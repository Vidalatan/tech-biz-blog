document.querySelector('.login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password}),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    } else {
        alert('Please enter both your Username and Password')
    }
});

document.querySelector('#nav-home').addEventListener('click', event => {
    event.preventDefault();
    document.location.replace('/')
});

document.querySelector('#nav-dash').addEventListener('click', async (event) => {
    event.preventDefault();
    document.location.replace('/dashboard')
});